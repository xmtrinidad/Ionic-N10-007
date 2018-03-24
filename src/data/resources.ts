import { Resource } from '../models/resource';

const DOMAIN_ONE_ONE_RESOURCES: Resource[] = [
  {
    objectiveNumber: 1.1,
    title: 'Introduction to IP',
    description: 'We rely on IP as the fundamental protocol on today’s networks. In this video, you’ll learn about the fundamentals of IP, TCP, UDP, and ICMP.',
    img: 'https://img.youtube.com/vi/9qFZh29JhnA/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=9qFZh29JhnA'
  },
  {
    objectiveNumber: 1.1,
    title: 'Common Ports',
    description: 'As you manage your network devices, you’ll notice that certain port numbers will be commonly used. In this video, you’ll learn about these common TCP and UDP ports and how to recognize applications that are using these well-known port numbers.',
    img: 'https://img.youtube.com/vi/vp_ZxQ0CTJk/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=vp_ZxQ0CTJk'
  },
];

const DOMAIN_ONE_TWO_RESOURCES: Resource[] = [
  {
    objectiveNumber: 1.2,
    title: 'Understanding the OSI Model',
    description: '',
    img: '',
    link: ''
  }
];

const DOMAIN_ONE_THREE_RESOURCES: Resource[] = [
  {
    objectiveNumber: 1.3,
    title: 'Introduction to Ethernet',
    description: '',
    img: '',
    link: ''
  },
  {
    objectiveNumber: 1.3,
    title: 'Network Switching Overview',
    description: '',
    img: '',
    link: ''
  },
  {
    objectiveNumber: 1.3,
    title: 'Broadcast Domains and Collision Domains',
    description: '',
    img: '',
    link: ''
  },
  {
    objectiveNumber: 1.3,
    title: 'Unicasts, Broadcasts, and Multicasts',
    description: '',
    img: '',
    link: ''
  },
  {
    objectiveNumber: 1.3,
    title: 'Protocol Data Units',
    description: '',
    img: '',
    link: ''
  },
  {
    objectiveNumber: 1.3,
    title: 'Network Segmentation',
    description: '',
    img: '',
    link: ''
  },
];

const CONCEPTS_RESOURCES: Resource[][] = [
  DOMAIN_ONE_ONE_RESOURCES, DOMAIN_ONE_TWO_RESOURCES,
  DOMAIN_ONE_THREE_RESOURCES
];

export const RESOURCES: Resource[][] = [
  ...CONCEPTS_RESOURCES
];
