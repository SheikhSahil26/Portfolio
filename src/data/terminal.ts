import type { TerminalCommand } from '../types';

export const terminalCommands: TerminalCommand[] = [
  {
    command: 'help',
    description: 'List all available commands',
    output: [
      'Available commands:',
      '',
      '  about        — Who I am',
      '  skills       — Technical skills',
      '  projects     — Featured projects',
      '  experience   — Work & education',
      '  contact      — Get in touch',
      '  clear        — Clear terminal',
      '',
      'Type a command and press Enter.',
    ],
  },
  {
    command: 'about',
    description: 'About me',
    output: [
      '┌─────────────────────────────────────┐',
      '│  SAHIL SHEIKH                       │',
      '│  Software Engineer                  │',
      '│                                     │',
      '│  Focus: Backend · System Design     │',
      '│         AI/ML · Full Stack          │',
      '│                                     │',
      '│  B.Tech IT — VGEC                   │',
      '└─────────────────────────────────────┘',
    ],
  },
  {
    command: 'skills',
    description: 'Technical skills',
    output: [
      'FRONTEND   React · TypeScript · JavaScript · Tailwind CSS',
      'BACKEND    Node.js · Express · NestJS · Python · FastApi',
      'DATABASE   PostgreSQL · MongoDB · MySQL · Prisma',
      'INFRA      Redis · Docker · Git',
      'AI / ML    Python · Machine Learning · Generative AI',
      "Testing    Vitest · Playwright"
    ],
  },
  {
    command: 'projects',
    description: 'Featured projects',
    output: [
      '01  ZIGGY          Food Ordering Platform',
      '02  B2B & B2C      Business Platform',
      '03  VibeSphere    Social Media Platform',
      '04  TypeRush      Multiplayer Typing Game',
    ],
  },
  {
    command: 'experience',
    description: 'Work & education',
    output: [
      'WORK',
      '  Software Developer @ eSparkBiz Technologies',
      '  2026 — Present',
      '',
      'EDUCATION',
      '  B.Tech Information Technology',
      '  Vishwakarma Government Engineering College',
      '  2022 — 2026',
    ],
  },
  {
    command: 'contact',
    description: 'Contact information',
    output: [
      'EMAIL      sahilsheikh261204@gmail.com',
      'GITHUB     github.com/SheikhSahil26',
      'LINKEDIN   linkedin.com/in/sahil-sheikh-3b36a7278',
      '',
      'Let\'s build something interesting.',
    ],
  },
];

export const terminalPrompt = 'sahil@portfolio:~$';
