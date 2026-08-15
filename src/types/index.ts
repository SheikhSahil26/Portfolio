// ─── Project Types ───────────────────────────────────────────────

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  problem?: string;
  architecture?: string;
  features?: string[];
  challenges?: string[];
  github?: string;
  live?: string;
  image?: string;
}

// ─── Technology Types ────────────────────────────────────────────

export type TechCategory = 'frontend' | 'backend' | 'database' | 'infrastructure' | 'testing' | 'ai';

export interface Technology {
  name: string;
  category: TechCategory;
  x?: number;
  y?: number;
}

export interface TechConnection {
  from: string;
  to: string;
}

// ─── Experiment Types ────────────────────────────────────────────

export interface Experiment {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

// ─── Experience Types ────────────────────────────────────────────

export interface Experience {
  id: string;
  type: 'education' | 'work';
  title: string;
  organization: string;
  period: string;
  description?: string;
}

// ─── Terminal Types ──────────────────────────────────────────────

export interface TerminalCommand {
  command: string;
  description: string;
  output: string[];
}

// ─── Personal Types ──────────────────────────────────────────────

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  education: string;
  institution: string;
  bio: string;
  email: string;
  socials: SocialLink[];
  focus: string[];
}

// ─── Navigation Types ────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

// ─── Cursor Types ────────────────────────────────────────────────

export type CursorVariant = 'default' | 'hover' | 'project' | 'hidden';
