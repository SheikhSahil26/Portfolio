import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { technologies, techConnections, categoryColors, categoryLabels } from '../../data/technologies';
import SectionHeader from '../../components/ui/SectionHeader';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import { useIsMobile } from '../../hooks/useMediaQuery';

// Calculate positions for constellation layout
function getNodePositions(width: number, height: number, isMobile: boolean) {
  const cx = width / 2;
  const cy = height / 2;

  if (isMobile) {
    // Compact layout for mobile
    const positions: Record<string, { x: number; y: number }> = {};
    const sorted = [...technologies];
    const cols = 3;
    const spacingX = width / (cols + 1);
    const spacingY = 70;
    const startY = 40;

    sorted.forEach((tech, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      positions[tech.name] = {
        x: spacingX * (col + 1),
        y: startY + row * spacingY,
      };
    });

    return positions;
  }

  // Desktop: orbital layout by category
  const categoryPositions: Record<string, { angle: number; radius: number }> = {
    backend: { angle: -Math.PI / 2, radius: 0 },     // center
    frontend: { angle: -Math.PI / 4, radius: 180 },   // top-right
    database: { angle: Math.PI / 4, radius: 180 },     // bottom-right
    infrastructure: { angle: (3 * Math.PI) / 4, radius: 180 }, // bottom-left
    testing: { angle: Math.PI, radius: 160 },            // left
    ai: { angle: (-3 * Math.PI) / 4, radius: 180 },   // top-left
  };

  const positions: Record<string, { x: number; y: number }> = {};
  const categoryItems: Record<string, typeof technologies> = {};

  technologies.forEach((tech) => {
    if (!categoryItems[tech.category]) categoryItems[tech.category] = [];
    categoryItems[tech.category].push(tech);
  });

  Object.entries(categoryItems).forEach(([category, items]) => {
    const catPos = categoryPositions[category] || { angle: 0, radius: 200 };
    const groupCx = cx + Math.cos(catPos.angle) * catPos.radius;
    const groupCy = cy + Math.sin(catPos.angle) * catPos.radius;

    items.forEach((tech, i) => {
      const itemAngle = catPos.angle + (i - (items.length - 1) / 2) * 0.6;
      const itemRadius = category === 'backend' ? 70 + i * 40 : 50 + i * 35;
      positions[tech.name] = {
        x: groupCx + Math.cos(itemAngle) * itemRadius,
        y: groupCy + Math.sin(itemAngle) * itemRadius,
      };
    });
  });

  return positions;
}

export default function TechConstellation() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const svgWidth = isMobile ? 360 : 800;
  const svgHeight = isMobile ? technologies.length * 25 + 80 : 550;

  const positions = useMemo(
    () => getNodePositions(svgWidth, svgHeight, isMobile),
    [svgWidth, svgHeight, isMobile]
  );

  const isHighlighted = (techName: string) => {
    if (!hoveredTech) return hoveredCategory ? technologies.find(t => t.name === techName)?.category === hoveredCategory : true;
    if (techName === hoveredTech) return true;
    return techConnections.some(
      (c) =>
        (c.from === hoveredTech && c.to === techName) ||
        (c.to === hoveredTech && c.from === techName)
    );
  };

  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        <SectionHeader label="TECHNOLOGY" number="02" />

        {/* Category Legend */}
        <motion.div
          className="flex flex-wrap gap-4 md:gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(categoryLabels).map(([key, label]) => (
            <motion.button
              key={key}
              variants={fadeInUp}
              className={`flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.15em] transition-all duration-300 ${
                hoveredCategory === key ? 'opacity-100' : hoveredCategory ? 'opacity-30' : 'opacity-70 hover:opacity-100'
              }`}
              onMouseEnter={() => setHoveredCategory(key)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: categoryColors[key] }}
              />
              <span style={{ color: hoveredCategory === key ? categoryColors[key] : undefined }}>
                {label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Constellation SVG */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full max-w-[800px]"
            style={{ overflow: 'visible' }}
          >
            {/* Connections */}
            {!isMobile && techConnections.map((conn, i) => {
              const from = positions[conn.from];
              const to = positions[conn.to];
              if (!from || !to) return null;

              const highlighted =
                !hoveredTech ||
                conn.from === hoveredTech ||
                conn.to === hoveredTech;

              return (
                <line
                  key={i}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={highlighted ? 'rgba(10, 255, 231, 0.15)' : 'rgba(255, 255, 255, 0.02)'}
                  strokeWidth={highlighted && hoveredTech ? 1.5 : 0.5}
                  className="transition-all duration-500"
                />
              );
            })}

            {/* Nodes */}
            {technologies.map((tech) => {
              const pos = positions[tech.name];
              if (!pos) return null;

              const highlighted = isHighlighted(tech.name);
              const color = categoryColors[tech.category];
              const isHovered = hoveredTech === tech.name;

              return (
                <g
                  key={tech.name}
                  className="cursor-pointer"
                  onMouseEnter={() => { setHoveredTech(tech.name); setHoveredCategory(null); }}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  {/* Glow */}
                  {isHovered && (
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={20}
                      fill={color}
                      opacity={0.1}
                    />
                  )}

                  {/* Node dot */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isHovered ? 6 : 4}
                    fill={highlighted ? color : 'rgba(255,255,255,0.1)'}
                    className="transition-all duration-300"
                  />

                  {/* Label */}
                  <text
                    x={pos.x}
                    y={pos.y + (isMobile ? 0 : 18)}
                    textAnchor={isMobile ? 'start' : 'middle'}
                    dx={isMobile ? 15 : 0}
                    dy={isMobile ? 4 : 0}
                    fill={highlighted ? '#F5F5F5' : 'rgba(255,255,255,0.2)'}
                    fontSize={isMobile ? 11 : 10}
                    fontFamily="'JetBrains Mono', monospace"
                    letterSpacing="0.1em"
                    className="transition-all duration-300 select-none"
                    style={{ fontWeight: isHovered ? 600 : 400 }}
                  >
                    {tech.name.toUpperCase()}
                  </text>
                </g>
              );
            })}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
