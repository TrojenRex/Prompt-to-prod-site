/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Track, ScheduleItem, TeamMember, GalleryItem, FAQItem } from './types';

export const TRACKS: Track[] = [
  {
    id: 'track-rapid-mvp',
    name: 'Rapid Full-Stack MVP',
    description: 'Transform a complex real-world issue (like healthcare, green energy, or micro-finance) into a living full-stack web. Generate the server, frontend design, and prompt-oriented automation to prove practical commercial viability.',
    color: 'blue',
    icon: 'Cpu',
    techStack: ['React', 'NodeJS', 'Tailwind CSS', 'Gemini SDK', 'Vite'],
    criteria: [
      'Visual polish and responsive design',
      'Effective prompt composition structure',
      'Realistic integration of generative services',
      'Clarity of core business solution'
    ],
    maxTeams: 50
  },
  {
    id: 'track-agent-copilots',
    name: 'AI Agent & Productivity Copilots',
    description: 'Build specialized workflows, CLI helper routines, or Chrome/Slack extensions that leverage structured agentic flows. Focus heavily on chain-of-thought prompt configurations, custom tools, and self-correcting logic loops.',
    color: 'red',
    icon: 'Layers',
    techStack: ['Python', 'LangChain', 'TypeScript', 'Gemini APIs', 'JSON Schema'],
    criteria: [
      'Sophistication of prompt-based reasoning',
      'Workflow acceleration metrics',
      'Robustness of edge-case error prevention',
      'Level of task automation depth'
    ],
    maxTeams: 40
  },
  {
    id: 'track-creative-canvas',
    name: 'Interactive Creative Canvas',
    description: 'Create experiences where prompt outputs control physical layout canvas features, 3D/2D animation assets, audio synthesizers, or dynamic interactive learning environments. Move prompt engineering into immersive design spaces.',
    color: 'yellow',
    icon: 'Palette',
    techStack: ['HTML5 Canvas', 'Three.js', 'Web Audio API', 'React Motion'],
    criteria: [
      'Originality and emotional resonance',
      'Dynamic reactivity of sensory outputs',
      'UI sensory responsiveness',
      'Cleanliness and design beauty'
    ],
    maxTeams: 30
  }
];

export const SCHEDULE: ScheduleItem[] = [
  {
    id: 'sched-1',
    time: '09:00 AM - 10:00 AM',
    title: 'Participant Check-in & Breakfast',
    description: 'Gather at BBIT Central Auditorium Main Lounge. Collect custom GDG badges, event kits, and enjoy hot coffee and breakfast wraps.',
    type: 'general',
    status: 'past'
  },
  {
    id: 'sched-2',
    time: '10:00 AM - 10:45 AM',
    title: 'Inauguration & LLM Briefing',
    description: 'A grand introduction by the GDG Lead. Followed by keynote lectures on rapid prompt design guidelines from Google developer specialists.',
    speaker: 'Abhradeep Sen & Guests',
    speakerRole: 'GDG Lead & DevRel Engineers',
    type: 'general',
    status: 'past'
  },
  {
    id: 'sched-3',
    time: '10:45 AM - 01:30 PM',
    title: 'Coding Phase 1: Rapid Ideation',
    description: 'The countdown strikes! Squads occupy seats and begin scoping prompts, drafting wireframes, and seeding their local codebases.',
    type: 'coding',
    status: 'past'
  },
  {
    id: 'sched-4',
    time: '01:30 PM - 02:30 PM',
    title: 'Networking Lunch & Midpoint Mentoring',
    description: 'A delicious feast. Mentors from esteemed organizations visit team stands to inspect initial prompt frameworks and fine-tune scopes.',
    type: 'mentoring',
    status: 'past'
  },
  {
    id: 'sched-5',
    time: '02:30 PM - 04:30 PM',
    title: 'Coding Phase 2: Final Deployment',
    description: 'Tension rising. Finalizing CSS margins, polishing client-side validation logic, and ensuring proper API mockups. The build system freeze!',
    type: 'coding',
    status: 'past'
  },
  {
    id: 'sched-6',
    time: '04:30 PM - 05:45 PM',
    title: 'The Pitch: 3-Minute Showdowns',
    description: 'Teams showcase their creations in rapid-fire pitches to the jury. Each group gets exactly 180 seconds to explain their prompt Strategy and Demo.',
    type: 'pitch',
    status: 'past'
  },
  {
    id: 'sched-7',
    time: '05:45 PM - 06:30 PM',
    title: 'Closing Awards & Group Photo',
    description: 'Jury delivers final verdicts. Trophies, cash vouchers, and participation certificates are distributed. A huge GDG group selfie!',
    type: 'closing',
    status: 'past'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Abhradeep Sen',
    role: 'GDG Lead & Host',
    category: 'core',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=256&h=256&q=80',
    colorTheme: 'blue',
    githubLink: 'https://github.com/officialabhradeep',
    linkedinLink: 'https://linkedin.com/in/abhradeep-sen',
    bio: 'Lead organizer at GDG On Campus BBIT. Passionate about empowering engineering undergraduates with cloud native toolkits.'
  },
  {
    id: 'team-2',
    name: 'Sourav Datta',
    role: 'AI/ML Co-ordinator',
    category: 'tech',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=256&h=256&q=80',
    colorTheme: 'yellow',
    githubLink: 'https://github.com',
    linkedinLink: 'https://linkedin.com',
    bio: 'Directs educational bootcamps on neural networks, large language prompts, and computer vision deployment.'
  },
  {
    id: 'team-3',
    name: 'Priyanshu Dey',
    role: 'Web Development Lead',
    category: 'tech',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=facearea&facepad=2&w=256&h=256&q=80',
    colorTheme: 'red',
    githubLink: 'https://github.com',
    linkedinLink: 'https://linkedin.com',
    bio: 'Crafts standard React, Vite, and NextJS architectures with stellar visual responsiveness and speed.'
  },
  {
    id: 'team-4',
    name: 'Anjali Shaw',
    role: 'UI/UX Design Lead',
    category: 'design',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=2&w=256&h=256&q=80',
    colorTheme: 'yellow',
    githubLink: 'https://github.com',
    linkedinLink: 'https://linkedin.com',
    bio: 'Ensures absolute typographic precision, fluid transitions, and Google Material-derived layout alignment.'
  },
  {
    id: 'team-5',
    name: 'Rohan Banerjee',
    role: 'Event Co-ordinator',
    category: 'management',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=facearea&facepad=2&w=256&h=256&q=80',
    colorTheme: 'blue',
    githubLink: 'https://github.com',
    linkedinLink: 'https://linkedin.com',
    bio: 'Binds industrial partnership networks, secures corporate sponsorship, and logistics of multi-track events.'
  },
  {
    id: 'team-6',
    name: 'Dr. S. Deb',
    role: 'Faculty Advisor',
    category: 'advisors',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80',
    colorTheme: 'green',
    linkedinLink: 'https://linkedin.com',
    bio: 'Associate Professor guiding the Computer Science and Engineering Department at Budge Budge Institute of Technology.'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Welcome Address & Guidelines',
    category: 'briefing',
    url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    description: 'GDG Lead briefing 150+ student innovators on modern API configurations and rapid design logic.'
  },
  {
    id: 'g-2',
    title: 'The Coding Phase Commences',
    category: 'coding',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    description: 'Teams of BBIT and guest colleges brainstorming system diagrams and writing initial React routes.'
  },
  {
    id: 'g-3',
    title: 'Active Technical Mentoring',
    category: 'coding',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    description: 'Tech leads inspect client-side prompt flows, refining response payload formats and performance.'
  },
  {
    id: 'g-4',
    title: 'Intense 180s Pitch Showdowns',
    category: 'pitching',
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'A participant explaining user onboarding logic and prompt pipelines to our panel of judges.'
  },
  {
    id: 'g-5',
    title: 'The Victor Champions',
    category: 'winners',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    description: 'The winning squad receiving the gold champion cup for their AI-driven crop diagnostic product.'
  },
  {
    id: 'g-6',
    title: 'GDG On Campus Core Family',
    category: 'winners',
    url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    description: 'Organizers and mentors raising hands in union after concluding a stellar Prompt-to-Product 2026.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is the Prompt-to-Product Challenge?',
    answer: 'It is a specialized fast hackathon designed by GDG On Campus BBIT where participants leverage Generative AI models (like Gemini) to brainstorm, design, and program fully operational, visual application products in less than a day.'
  },
  {
    question: 'I am a beginner. Can I play and register?',
    answer: 'Absolutely! Generative AI lowers the entry barrier. We welcome newcomers. As long as you have basic command over web workflows (HTML, JS, CSS) and a strong logical problem-solving compass, you will thrive.'
  },
  {
    question: 'How large can our squad be?',
    answer: 'Squads can comprise between 2 and 4 active representatives. Solo participation is not permitted to encourage strong teamwork, role division, and creative peer feedback.'
  },
  {
    question: 'What are the core evaluation criteria?',
    answer: 'Our judges grade on 4 axes: Visual Design Customization (the quality, clean spacing, typography, and feedback systems), Prompt Engineering Craft (effectiveness of LLM orchestration), Solution Originality, and Demo Pitch Performance.'
  },
  {
    question: 'Do we get participation credentials?',
    answer: 'Yes! Every active participant who successfully publishes their prototype and conducts their elevator pitch receives an official GDG On Campus – Budge Budge Institute of Technology certificate of completion.'
  },
  {
    question: 'Where is Budge Budge Institute of Technology located?',
    answer: 'BBIT is located in Budge Budge, Kolkata, West Bengal (700137). The challenge is fully offline, taking place inside the state-of-the-art Computer Lab Annex and Central Auditorium.'
  }
];
