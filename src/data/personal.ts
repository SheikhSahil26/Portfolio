import type { PersonalInfo, NavItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Sahil Sheikh',
  firstName: 'SAHIL',
  lastName: 'SHEIKH',
  role: 'Software Engineer',
  tagline: 'I BUILD SCALABLE SYSTEMS AND INTELLIGENT PRODUCTS.',
  education: 'B.Tech Information Technology',
  institution: 'Vishwakarma Government Engineering College',
  bio: 'I design and build scalable web systems, backend architectures, and intelligent applications with a focus on clean engineering and practical product development.',
  email: 'sahilsheikh261204@gmail.com',
  socials: [
    { label: 'GitHub', url: 'https://github.com/SheikhSahil26', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/sahil-sheikh', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:sahilsheikh261204@gmail.com', icon: 'mail' },
  ],
  focus: ['MERN', 'NESTJS',"SOFTWARE DEVELOPMENT", 'TYPESCRIPT', 'AI / ML', 'SYSTEM DESIGN'],
};

export const navItems: NavItem[] = [
  { label: 'WORK', href: '#projects' },
  { label: 'LAB', href: '#lab' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];
