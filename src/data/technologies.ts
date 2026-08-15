import type { Technology, TechConnection } from '../types';

export const technologies: Technology[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'HTML / CSS', category: 'frontend' },

  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'NestJS', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'FastAPI', category: 'backend' },

  // Database
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'MySQL', category: 'database' },
  { name: 'Prisma', category: 'database' },
  { name: 'Redis', category: 'database' },

  // Infrastructure
  { name: 'Docker', category: 'infrastructure' },
  { name: 'Git', category: 'infrastructure' },
  { name: 'Linux', category: 'infrastructure' },
  { name: 'REST APIs', category: 'infrastructure' },

  // Testing
  { name: 'Vitest', category: 'testing' },
  { name: 'Playwright', category: 'testing' },

  // AI
  { name: 'Machine Learning', category: 'ai' },
  { name: 'Generative AI', category: 'ai' },
];

export const techConnections: TechConnection[] = [
  { from: 'React', to: 'TypeScript' },
  { from: 'React', to: 'Tailwind CSS' },
  { from: 'TypeScript', to: 'Node.js' },
  { from: 'TypeScript', to: 'NestJS' },
  { from: 'Node.js', to: 'Express' },
  { from: 'Node.js', to: 'NestJS' },
  { from: 'NestJS', to: 'PostgreSQL' },
  { from: 'NestJS', to: 'Prisma' },
  { from: 'Express', to: 'MongoDB' },
  { from: 'Prisma', to: 'PostgreSQL' },
  { from: 'Node.js', to: 'Redis' },
  { from: 'NestJS', to: 'Redis' },
  { from: 'Python', to: 'Machine Learning' },
  { from: 'Python', to: 'FastAPI' },
  { from: 'Machine Learning', to: 'Generative AI' },
  { from: 'Node.js', to: 'Docker' },
  { from: 'React', to: 'JavaScript' },
  { from: 'React', to: 'HTML / CSS' },
  { from: 'Express', to: 'MySQL' },
  { from: 'Vitest', to: 'React' },
  { from: 'Playwright', to: 'TypeScript' },
  { from: 'Node.js', to: 'REST APIs' },
];

export const categoryColors: Record<string, string> = {
  frontend: '#0AFFE7',
  backend: '#0A84FF',
  database: '#30D158',
  infrastructure: '#FF9F0A',
  testing: '#FF453A',
  ai: '#BF5AF2',
};

export const categoryLabels: Record<string, string> = {
  frontend: 'FRONTEND',
  backend: 'BACKEND',
  database: 'DATABASE & CACHE',
  infrastructure: 'DEVOPS & TOOLS',
  testing: 'TESTING',
  ai: 'AI / ML',
};

// ─── Skills Grid Data (for the detailed listing section) ─────

export interface SkillCategory {
  title: string;
  color: string;
  skills: { name: string; level: 'core' | 'proficient' | 'familiar' }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'LANGUAGES',
    color: '#0AFFE7',
    skills: [
      { name: 'TypeScript', level: 'core' },
      { name: 'JavaScript', level: 'core' },
      { name: 'Python', level: 'proficient' },
      { name: 'SQL', level: 'proficient' },
      { name: 'HTML / CSS', level: 'core' },
    ],
  },
  {
    title: 'FRONTEND',
    color: '#0AFFE7',
    skills: [
      { name: 'React', level: 'core' },
      { name: 'Tailwind CSS', level: 'core' },
      
    ],
  },
  {
    title: 'BACKEND',
    color: '#0A84FF',
    skills: [
      { name: 'Node.js', level: 'core' },
      { name: 'Express', level: 'core' },
      { name: 'NestJS', level: 'core' },
      { name: 'FastAPI', level: 'proficient' },
      { name: 'REST APIs', level: 'core' },
      { name: 'WebSockets', level: 'proficient' },
    ],
  },
  {
    title: 'DATABASE & CACHE',
    color: '#30D158',
    skills: [
      { name: 'PostgreSQL', level: 'core' },
      { name: 'MongoDB', level: 'core' },
      { name: 'MySQL', level: 'proficient' },
      { name: 'Redis', level: 'proficient' },
      { name: 'Prisma', level: 'core' },
    ],
  },
  {
    title: 'DEVOPS & TOOLS',
    color: '#FF9F0A',
    skills: [
      { name: 'Git / GitHub', level: 'core' },
      { name: 'Docker', level: 'proficient' },
      { name: 'Linux', level: 'proficient' },
      { name: 'Postman', level: 'core' },
      { name: 'VS Code', level: 'core' },
    ],
  },
  {
    title: 'TESTING',
    color: '#FF453A',
    skills: [
      { name: 'Vitest', level: 'proficient' },
      { name: 'Playwright', level: 'proficient' },
      { name: 'Unit Testing', level: 'proficient' },
      { name: 'E2E Testing', level: 'familiar' },
    ],
  },
  {
    title: 'AI / ML',
    color: '#BF5AF2',
    skills: [
      { name: 'Machine Learning', level: 'familiar' },
      { name: 'Generative AI', level: 'familiar' },
      { name: 'LLM Integration', level: 'familiar' },
    ],
  },
  {
    title: 'CONCEPTS',
    color: '#FFFFFF',
    skills: [
      { name: 'System Design', level: 'proficient' },
      { name: 'Backend Architecture', level: 'proficient' },
      { name: 'Data Structures', level: 'core' },
      { name: 'Algorithms', level: 'core' },
      { name: 'Design Patterns', level: 'proficient' },
      { name: 'Clean Code', level: 'core' },
    ],
  },
];
