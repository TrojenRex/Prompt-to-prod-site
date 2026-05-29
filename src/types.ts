/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Track {
  id: string;
  name: string;
  description: string;
  color: string; // "blue", "red", "yellow", "green" for google color themes
  icon: string;
  techStack: string[];
  criteria: string[];
  maxTeams: number;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description: string;
  speaker?: string;
  speakerRole?: string;
  type: 'general' | 'coding' | 'mentoring' | 'pitch' | 'closing';
  status: 'past' | 'live' | 'upcoming';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'core' | 'tech' | 'design' | 'management' | 'advisors';
  avatar: string;
  colorTheme: 'blue' | 'red' | 'yellow' | 'green';
  githubLink?: string;
  linkedinLink?: string;
  bio: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'briefing' | 'coding' | 'pitching' | 'winners';
  url: string;
  description: string;
}

export interface Registration {
  id: string;
  teamName: string;
  collegeName: string;
  leadName: string;
  leadEmail: string;
  leadPhone: string;
  trackId: string;
  member2Name?: string;
  member2Email?: string;
  member3Name?: string;
  member3Email?: string;
  member4Name?: string;
  member4Email?: string;
  experienceLevel: 'beginner' | 'intermediate' | 'expert';
  registeredAt: string;
  ticketNumber: string;
  seatNumber: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  sentAt: string;
}
