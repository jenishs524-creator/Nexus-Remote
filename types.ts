
export interface Job {
  id: string;
  title: string;
  description: string;
  budget: {
    min: number;
    max: number;
    type: 'fixed' | 'hourly';
  };
  skills: string[];
  clientName: string;
  clientRating: number;
  postedAt: string;
  location: string;
  bidsCount: number;
}

export interface Freelancer {
  id: string;
  name: string;
  tagline: string;
  rating: number;
  reviewsCount: number;
  hourlyRate: number;
  skills: string[];
  location: string;
  completedJobs: number;
  avatar: string;
}

export interface Bid {
  id: string;
  jobId: string;
  freelancerId: string;
  amount: number;
  deliveryDays: number;
  proposal: string;
  timestamp: string;
}
