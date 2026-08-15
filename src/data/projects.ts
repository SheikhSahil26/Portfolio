import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'typerush',
    number: '01',
    title: 'TYPERUSH',
    subtitle: 'Multiplayer typing game',
    description:
      'A multiplayer typing game with real-time rooms and competitive gameplay.',
    stack: ['React', 'Node.js', 'Firebase', 'Socket.IO'],
    problem:
      'Building a competitive multiplayer game that requires precise real-time synchronization between players.',
    architecture:
      'React frontend with Node.js WebSocket server for real-time game state synchronization, Firebase for user data and authentication.',
    features: [
      'Real-time multiplayer rooms',
      'Live WPM and accuracy tracking',
      'Competitive leaderboards',
      'Custom game modes',
      'Typing statistics and history',
    ],
    challenges: [
      'Synchronizing game state across multiple clients with minimal latency',
      'Implementing fair and accurate WPM calculation',
      'Handling race conditions in room management',
    ],
    github: 'https://github.com/SheikhSahil26/TypeRush',
    live: 'https://type-rush-three.vercel.app',
  },
  {
    id: 'ofos',
    number: '02',
    title: 'ZIGGY',
    subtitle: 'Modular food ordering platform',
    description:
      'A modular food ordering platform involving customers, restaurants, branches, delivery partners, orders, carts, and real-time delivery workflows.',
    stack: ['Node.js', 'Express', "TypeScript", 'Prisma', "SQL Server", 'Redis', 'React'],
    problem:
      'Building a scalable food delivery system that handles multi-restaurant ordering, real-time delivery tracking, and complex order workflows.',
    architecture:
      'Node.js + Express REST API with Prisma ORM and SQL for flexible data modeling, Redis for real-time features and caching, and a React frontend.',
    features: [
      'Multi-restaurant ordering',
      'Real-time delivery tracking',
      'Cart management with branch-level menus',
      'Delivery partner assignment system',
      'Order lifecycle management',
    ],
    challenges: [
      'Designing efficient cart aggregation across restaurants',
      'Implementing real-time delivery status updates',
      'Building a fair delivery partner assignment algorithm',
    ],
    github: '#',
    live: '#',
  },
  {
    id: 'b2b-b2c-platform',
    number: '03',
    title: 'B2B & B2C BUSINESS PLATFORM',
    subtitle: 'Full-stack platform built for real-world business operations',
    description:
      'A production-oriented freelance platform designed to support both B2B and B2C workflows, connecting businesses and customers through a scalable web application with modern frontend, backend, and database architecture.',
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'REST API',
    ],
    problem:
      'The client needed a unified digital platform capable of supporting both business-to-business and business-to-consumer workflows while providing a seamless experience for customers and efficient tools for business operations.',
    architecture:
      'Full-stack MERN architecture with a React and TypeScript frontend, Node.js and Express backend, RESTful APIs, MongoDB for persistent data storage, and a modular service-oriented application structure.',
    features: [
      'B2B and B2C user workflows',
      'Role-based access and business operations',
      'Product and service management',
      'Customer and business management',
      'Order and transaction workflows',
      'Responsive web application',
      'RESTful backend APIs',
    ],
    challenges: [
      'Designing a flexible architecture supporting both B2B and B2C workflows',
      'Building reusable APIs and business logic across different user roles',
      'Designing efficient database models for complex business relationships',
      'Maintaining a responsive and consistent user experience across devices',
    ],
    github: '#',
    live: '#',
  },

  {
    id: 'vibesphere',
    number: '04',
    title: 'VIBESPHERE',
    subtitle: 'Social media platform with real-time interactions',
    description:
      'A social media platform with real-time interactions, stories, media uploads, and modern social features.',
    stack: ['MERN', 'Socket.IO', 'Cloudinary', 'Firebase'],
    problem:
      'Creating a full-featured social platform that supports real-time messaging, media sharing, and interactive social features.',
    architecture:
      'Full MERN stack with Socket.IO for real-time communication, Cloudinary for media storage, and Firebase for authentication.',
    features: [
      'Real-time messaging and notifications',
      'Story creation and viewing',
      'Media upload with cloud storage',
      'Social feed with engagement features',
      'User profiles and connections',
    ],
    challenges: [
      'Scaling WebSocket connections for real-time features',
      'Optimizing media upload and delivery pipeline',
      'Building an engaging and responsive social feed algorithm',
    ],
    github: '#',
    live: '#',
  },

];
