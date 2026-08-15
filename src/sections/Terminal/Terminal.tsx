import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { terminalCommands, terminalPrompt } from '../../data/terminal';
import SectionHeader from '../../components/ui/SectionHeader';
import { fadeInUp } from '../../animations/variants';

interface TerminalLine {
  type: 'input' | 'output';
  content: string;
}

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to sahil.portfolio v1.0.0' },
    { type: 'output', content: 'Type "help" for available commands.' },
    { type: 'output', content: '' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    // Add input line
    const newLines: TerminalLine[] = [
      ...lines,
      { type: 'input', content: `${terminalPrompt} ${cmd}` },
    ];

    if (trimmed === 'clear') {
      setLines([]);
      setInput('');
      return;
    }

    const command = terminalCommands.find((c) => c.command === trimmed);

    if (command) {
      command.output.forEach((line) => {
        newLines.push({ type: 'output', content: line });
      });
    } else if (trimmed === '') {
      // Just add empty line
    } else {
      newLines.push({
        type: 'output',
        content: `Command not found: ${trimmed}. Type "help" for available commands.`,
      });
    }

    newLines.push({ type: 'output', content: '' });
    setLines(newLines);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <section id="terminal" className="section-padding relative">
      <div className="section-container">
        <SectionHeader label="TERMINAL" number="06" />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Terminal Window */}
          <div className="border border-white/10 bg-[#0a0a0a] overflow-hidden">
            {/* Title Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="font-mono text-[0.6rem] tracking-[0.1em] text-text-muted ml-2">
                sahil@portfolio — bash
              </span>
            </div>

            {/* Terminal Body */}
            <div
              ref={scrollRef}
              className="p-4 md:p-6 h-[350px] md:h-[400px] overflow-y-auto font-mono text-sm leading-relaxed"
              onClick={() => inputRef.current?.focus()}
              data-lenis-prevent
            >
              {/* Output lines */}
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={`${
                    line.type === 'input'
                      ? 'text-text-primary'
                      : 'text-text-muted'
                  } whitespace-pre-wrap`}
                >
                  {line.content}
                </div>
              ))}

              {/* Input line */}
              <div className="flex items-center gap-2">
                <span className="text-text-secondary shrink-0">
                  {terminalPrompt}
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-accent caret-accent font-mono text-sm"
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Terminal input"
                />
              </div>
            </div>
          </div>

          {/* Hint */}
          <div className="mt-4 font-mono text-[0.55rem] tracking-[0.15em] text-text-muted text-center">
            TRY: help · about · skills · projects · experience · contact · clear
          </div>
        </motion.div>
      </div>
    </section>
  );
}
