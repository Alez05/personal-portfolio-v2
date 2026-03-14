import { TCourses } from '../../components';

export const courses: TCourses[] = [
  {
    id: '1',
    name: 'Fullstack Web Developer',
    nameIcon: 'fa-solid fa-award',
    provider: 'Le Wagon',
    date: 'March 2025 - Jun 2025',
    status: 'Completed',
    description: 'Intensive full-stack web development bootcamp covering HTML, CSS, JavaScript, Ruby on Rails, and React.',
    contentTitle: 'Key Topics',
    content: [
      'JavaScript Fundamentals',
      'Rails Backend',
      'React Frontend',
      'Database SQL',
      'Git Deployment'
    ],
    courseId: 'LW-WEBDEV-001',
    courseLink: 'https://www.lewagon.com/certificate/webdev',
    icons: {
      date: 'fa-solid fa-calendar'
    }
  },
  {
    id: '2',
    name: 'Chartered IT Certificate',
    nameIcon: 'fa-solid fa-award',
    provider: 'BCS, The Chartered Institute for IT',
    date: 'March 2025 - Jun 2025',
    status: 'Completed',
    description: 'Professional certification demonstrating knowledge and competence in IT and computing fundamentals.',
    contentTitle: 'Key Topics',
    content: [
      'IT Principles',
      'Project Management',
      'Software Lifecycle',
      'IT Security'
    ],
    courseId: 'BCS-IT-001',
    courseLink: 'https://www.bcs.org/certificates/chartered-it',
    icons: {
      date: 'fa-solid fa-calendar'
    }
  },
  {
    id: '3',
    name: 'SEO Certification',
    nameIcon: 'fa-solid fa-award',
    provider: 'HubSpot Academy',
    date: 'Jan 2024',
    status: 'Completed',
    description: 'Certification covering SEO strategies, keyword research, on-page and off-page SEO, and analytics.',
    contentTitle: 'Key Topics',
    content: [
      'Keyword Research',
      'On-Page SEO',
      'Off-Page SEO',
      'Content Strategy',
      'Analytics Tracking'
    ],
    courseId: 'HUB-SEO-001',
    courseLink: 'https://academy.hubspot.com/courses/seo',
    icons: {
      date: 'fa-solid fa-calendar'
    }
  },
  {
    id: '4',
    name: 'European Computer Driving License',
    nameIcon: 'fa-solid fa-award',
    provider: 'ECDL',
    date: 'May 2019',
    status: 'Completed',
    description: 'Certification demonstrating proficiency in essential computer skills and office software applications.',
    contentTitle: 'Key Topics',
    content: [
      'Word Processing',
      'Spreadsheets',
      'Presentations',
      'Database Basics',
      'Internet Usage'
    ],
    courseId: 'ECDL-001',
    courseLink: 'https://www.ecdl.com/certificate',
    icons: {
      date: 'fa-solid fa-calendar'
    }
  }
];
