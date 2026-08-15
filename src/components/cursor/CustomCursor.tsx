import { useEffect, useRef, useState, createContext, useContext, useCallback, type ReactNode } from 'react';
import { isTouchDevice, lerp } from '../../lib/utils';
import type { CursorVariant } from '../../types';

// ─── Cursor Context ─────────────────────────────────────────────

interface CursorContextType {
  setCursorVariant: (variant: CursorVariant) => void;
}

const CursorContext = createContext<CursorContextType>({
  setCursorVariant: () => {},
});

export const useCursor = () => useContext(CursorContext);

// ─── Cursor Provider ────────────────────────────────────────────

export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>('default');

  const setCursorVariant = useCallback((v: CursorVariant) => {
    setVariant(v);
  }, []);

  return (
    <CursorContext.Provider value={{ setCursorVariant }}>
      {children}
      {!isTouchDevice() && <CustomCursor variant={variant} />}
    </CursorContext.Provider>
  );
}

// ─── Custom Cursor Component ────────────────────────────────────

function CustomCursor({ variant }: { variant: CursorVariant }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      // Dot follows closely
      dotPos.current.x = lerp(dotPos.current.x, mousePos.current.x, 0.2);
      dotPos.current.y = lerp(dotPos.current.y, mousePos.current.y, 0.2);

      // Ring follows with more lag
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.08);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.08);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      if (textRef.current) {
        textRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const containerClass =
    variant === 'hover'
      ? 'cursor-hover'
      : variant === 'project'
        ? 'cursor-project'
        : '';

  return (
    <div className={containerClass}>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={textRef} className="cursor-text">
        VIEW
      </div>
    </div>
  );
}

export default CustomCursor;
