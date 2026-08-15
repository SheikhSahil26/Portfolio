import type { Experiment } from '../types';

export const experiments: Experiment[] = [
  {
    id: 'redis-geo',
    number: '01',
    title: 'REDIS GEO TRACKING',
    description:
      'Real-time geographic positioning for delivery partner systems.',
    tags: ['REDIS', 'GEOADD', 'GEOSEARCH', 'WEBSOCKETS'],
  },
  {
    id: 'websocket-arch',
    number: '02',
    title: 'WEBSOCKET ARCHITECTURE',
    description:
      'Scalable WebSocket server patterns for real-time communication systems.',
    tags: ['SOCKET.IO', 'NODE.JS', 'ROOMS', 'EVENTS'],
  },
  {
    id: 'job-processing',
    number: '03',
    title: 'DISTRIBUTED JOB PROCESSING',
    description:
      'Background job queues and distributed task processing pipelines.',
    tags: ['BULL', 'REDIS', 'WORKERS', 'QUEUES'],
  },
  // {
  //   id: 'ai-rag',
  //   number: '04',
  //   title: 'AI / RAG EXPERIMENTS',
  //   description:
  //     'Retrieval-augmented generation pipelines for intelligent document processing.',
  //   tags: ['LANGCHAIN', 'OPENAI', 'EMBEDDINGS', 'RAG'],
  // },
  // {
  //   id: 'vector-search',
  //   number: '05',
  //   title: 'VECTOR SEARCH',
  //   description:
  //     'Semantic search implementations using vector databases and embeddings.',
  //   tags: ['PGVECTOR', 'EMBEDDINGS', 'SIMILARITY', 'SEARCH'],
  // },
  {
    id: 'realtime-systems',
    number: '06',
    title: 'REAL-TIME SYSTEMS',
    description:
      'Event-driven architectures for real-time data synchronization.',
    tags: ['SSE', 'WEBSOCKETS', 'PUBSUB', 'EVENTS'],
  },
];
