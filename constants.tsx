
import { Job, Freelancer } from './types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Modern React Dashboard Development',
    description: 'We need a high-performance admin dashboard built with React, Tailwind, and Recharts. Integration with REST API required.',
    budget: { min: 2000, max: 5000, type: 'fixed' },
    skills: ['React', 'Tailwind CSS', 'TypeScript', 'D3.js'],
    clientName: 'TechFlow Systems',
    clientRating: 4.8,
    postedAt: '2 hours ago',
    location: 'Remote (San Francisco)',
    bidsCount: 12
  },
  {
    id: '2',
    title: 'Senior UI/UX Designer for Fintech App',
    description: 'Looking for a designer with experience in financial software to redesign our mobile application. Must have strong portfolio.',
    budget: { min: 60, max: 120, type: 'hourly' },
    skills: ['Figma', 'UI Design', 'User Research', 'Prototyping'],
    clientName: 'Global Ledger',
    clientRating: 4.9,
    postedAt: '5 hours ago',
    location: 'Remote (London)',
    bidsCount: 8
  },
  {
    id: '3',
    title: 'Python Backend Engineer (FastAPI)',
    description: 'Help us scale our microservices architecture using Python 3.11 and FastAPI. Postgres and Redis experience is a plus.',
    budget: { min: 5000, max: 8000, type: 'fixed' },
    skills: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    clientName: 'Nimbostratus AI',
    clientRating: 4.5,
    postedAt: '1 day ago',
    location: 'Remote (Berlin)',
    bidsCount: 24
  },
  {
    id: '4',
    title: 'Fullstack Web3 Marketplace',
    description: 'Develop a custom NFT marketplace for specialized digital assets. Smart contract knowledge required.',
    budget: { min: 10000, max: 25000, type: 'fixed' },
    skills: ['Solidity', 'Next.js', 'Ether.js', 'Node.js'],
    clientName: 'ChainLinkers',
    clientRating: 4.2,
    postedAt: '3 days ago',
    location: 'Remote (Singapore)',
    bidsCount: 15
  }
];

export const MOCK_FREELANCERS: Freelancer[] = [
  {
    id: 'f1',
    name: 'Sarah Jenkins',
    tagline: 'Senior Fullstack Developer & Cloud Architect',
    rating: 4.9,
    reviewsCount: 124,
    hourlyRate: 85,
    skills: ['React', 'Node.js', 'AWS', 'Python'],
    location: 'Canada',
    completedJobs: 86,
    avatar: 'https://picsum.photos/seed/sarah/200/200'
  },
  {
    id: 'f2',
    name: 'Marco Rossi',
    tagline: 'UI/UX Expert with 10+ years experience',
    rating: 5.0,
    reviewsCount: 52,
    hourlyRate: 110,
    skills: ['Figma', 'Branding', 'Interaction Design'],
    location: 'Italy',
    completedJobs: 45,
    avatar: 'https://picsum.photos/seed/marco/200/200'
  },
  {
    id: 'f3',
    name: 'Ananya Gupta',
    tagline: 'Data Scientist & ML Engineer',
    rating: 4.8,
    reviewsCount: 98,
    hourlyRate: 95,
    skills: ['Python', 'PyTorch', 'SQL', 'TensorFlow'],
    location: 'India',
    completedJobs: 72,
    avatar: 'https://picsum.photos/seed/ananya/200/200'
  }
];
