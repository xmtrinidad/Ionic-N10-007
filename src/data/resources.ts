import { Resource } from '../models/resource';

const DOMAIN_ONE_RESOURCES: Resource[] = [
  {
    objectiveNumber: 1.1,
    title: 'Introduction to IP',
    description: 'We rely on IP as the fundamental protocol on today’s networks. In this video, you’ll learn about the fundamentals of IP, TCP, UDP, and ICMP.',
    img: 'https://img.youtube.com/vi/9qFZh29JhnA/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=9qFZh29JhnA'
  },
  {
    objectiveNumber: 1.2,
    title: 'Introduction to IP',
    description: 'As you manage your network devices, you’ll notice that certain port numbers will be commonly used. In this video, you’ll learn about these common TCP and UDP ports and how to recognize applications that are using these well-known port numbers.',
    img: 'https://img.youtube.com/vi/vp_ZxQ0CTJk/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=vp_ZxQ0CTJk'
  }
];

const RESOURCES: Resource[] = [
  ...DOMAIN_ONE_RESOURCES
];
