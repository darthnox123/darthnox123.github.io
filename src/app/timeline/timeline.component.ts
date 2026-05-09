import { Component } from '@angular/core';

interface TimelineEntry {
  type: 'work' | 'education';
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

@Component({
  selector: 'app-timeline',
  standalone: false,
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  timeline: TimelineEntry[] = [
    {
      type: 'work',
      company: 'Blauarbeit',
      role: 'Frontend Developer',
      period: 'Nov 2023 – Apr 2026',
      location: 'Remote',
      highlights: [
        'Developed features for multiple Angular 17+ applications within a craftsmen job platform ecosystem.',
        'Built and configured a mobile PWA for logged-in users, delivering a mobile-first experience.',
        'Developed an intra-company admin platform using Angular and Tailwind CSS (Flowbite).',
        'Implemented E2E testing with Playwright for critical business flows (login, registration, subscription).',
        'Led migration to Laravel + Vue stack, resulting in a 40% improvement in Core Web Vitals metrics.',
        'Engineered an AI-driven chatbot using the Laravel AI SDK, optimizing lead generation and user engagement.',
      ]
    },
    {
      type: 'work',
      company: 'KnowledgeWorks',
      role: 'Software Developer',
      period: 'Dec 2020 – Nov 2023',
      location: 'Remote',
      highlights: [
        'Full-stack developer for HR management app: Angular (frontend), Node.js / NestJS (backend), MySQL.',
        'Mobile development using Ionic for cross-platform deployment on Android and iOS.',
        'Contributed to major release cycles, implementing new features and resolving critical bugs.',
      ]
    },
    {
      type: 'work',
      company: 'Bee Engineering',
      role: 'Junior Consultant',
      period: 'Feb 2019 – Apr 2020',
      location: 'Lisbon',
      highlights: [
        'Training in Java Spring, Vue.js, Git, MySQL, and Scrum methodologies.',
        'Client Assignment – Indra (May 2019): Frontend Developer for port management web application.',
        'Developed features for the national-scale "JUL" maritime logistics system using Angular 8 and Redux.',
      ]
    },
    {
      type: 'education',
      company: 'UAL – Universidade Autónoma de Lisboa',
      role: 'BSc Computer Science',
      period: '2015 – 2018',
      location: 'Lisbon',
      highlights: [
        'Coursework: Systems Programming, Data Structures & Algorithms, Artificial Intelligence, OOP.',
        'Certifications: English C1 (EF SET, 2022), Scrum Fundamentals Certified (SCRUMstudy, 2019).',
      ]
    },
  ];
}
