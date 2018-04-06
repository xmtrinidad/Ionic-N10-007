import { Resource } from '../models/resource';

/**
 * Resources 1.0 - Concepts
 **/
const DOMAIN_ONE_ONE_RESOURCES: Resource[] = [
  {
    objectiveNumber: 1.1,
    title: 'Introduction to IP',
    description: 'We rely on IP as the fundamental protocol on today’s networks. In this video, you’ll learn about the fundamentals of IP, TCP, UDP, and ICMP.',
    img: 'https://img.youtube.com/vi/9qFZh29JhnA/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=9qFZh29JhnA'
  },
  {
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
    description: 'The OSI model is one of the most common methods of describing application data flows. In this video, you’ll learn about the seven layers of the OSI model and how they are associated with real-world hardware and software components.',
    img: 'https://img.youtube.com/vi/G7aVKgGUe9c/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=G7aVKgGUe9c'
  }
];
const DOMAIN_ONE_THREE_RESOURCES: Resource[] = [
  {
    objectiveNumber: 1.3,
    title: 'Introduction to Ethernet',
    description: "Ethernet is the most common network topology in the world. In this video, you’ll learn the fundamentals of how Ethernet communicates from one device to another and how half-duplex and full-duplex configuration can effect this data transfer.",
    img: 'https://img.youtube.com/vi/iXfBbs9SSFQ/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=iXfBbs9SSFQ'
  },
  {
    title: 'Network Switching Overview',
    description: "The network switch is perhaps the most common piece of networking equipment in use today. In this video, you’ll learn how the switch makes forwarding decisions, how the switch reacts when it doesn’t know the destination of a frame, and how the ARP command can be used to validate a switch’s forwarding table.",
    img: 'https://img.youtube.com/vi/jR3VoKZWJyc/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=jR3VoKZWJyc'
  },
  {
    title: 'Broadcast Domains and Collision Domains',
    description: 'A foundational knowledge of network architecture starts with the concepts of broadcast domains and collision domains. In this video, you’ll learn how modern network design has eliminated collision domains and how you can minimize the impact of broadcasts through the use of properly engineered broadcast domains.',
    img: 'https://img.youtube.com/vi/SGbtLjIEVeo/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=SGbtLjIEVeo'
  },
  {
    title: 'Unicasts, Broadcasts, and Multicasts',
    description: 'There are many different ways to communicate across the network. In this video, you’ll compare the differences between unicasts, broadcasts, and multicasts.',
    img: 'https://img.youtube.com/vi/jotgabyT-uI/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=jotgabyT-uI'
  },
  {
    title: 'Protocol Data Units',
    description: 'PDUs are the building blocks of network communication. In this video, you’ll learn about protocol data units and how they are used at different layers of the OSI model.',
    img: 'https://img.youtube.com/vi/3RQW9s-aB6k/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=3RQW9s-aB6k'
  },
  {
    title: 'Network Segmentation',
    description: 'We commonly use network segmentation technologies to provide security and separation between logical areas of the network. In this video, you’ll learn about physical segmentation, logical VLAN segmentation, and 802.1Q VLAN trunking.',
    img: 'https://img.youtube.com/vi/9L4qDmvKPjQ/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=9L4qDmvKPjQ'
  },
  {
    title: 'Spanning Tree Protocol',
    description: 'We rely on STP to prevent loops on our switched networks. In this video, you’ll learn the fundamentals of Spanning Tree Protocol and how STP reacts when changes occur to the network.',
    img: 'https://img.youtube.com/vi/mLCpdsOZM9c/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=mLCpdsOZM9c'
  },
  {
    title: 'Switch Interface Properties',
    description: 'There are many different options available when configuring an interface on a switch. In this video, you’ll learn about basic interface settings, VLAN configurations, power over Ethernet, and much more.',
    img: 'https://img.youtube.com/vi/dqQny4UXiX0/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=dqQny4UXiX0'
  },
  {
    title: 'Static and Dynamic Routing',
    description: 'A network administrator has many options for configuring and maintaining the routing table between layer 3 devices. In this video, you’ll learn about static routing, dynamic routing, and default routes.',
    img: 'https://img.youtube.com/vi/YRzr56cwgCg/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=YRzr56cwgCg'
  },
  {
    title: 'IGP and EGP',
    description: 'Choosing a dynamic routing protocol is an important network design consideration. In this video, you’ll learn about autonomous systems, interior gateway protocols, and exterior gateway protocols.',
    img: 'https://img.youtube.com/vi/14s-M01m1fQ/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=14s-M01m1fQ'
  },
  {
    title: 'Dynamic Routing Protocols',
    description: 'Different dynamic routing protocols use different criteria to determine which route is really the best. In this video, you’ll learn the differences between distance-vector, link-state, and hybrid routing protocols.',
    img: 'https://img.youtube.com/vi/9390huk39mU/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=9390huk39mU'
  },
  {
    title: 'IPv4 and IPv6 Addressing',
    description: 'You’ll be working with IPv4 and IPv6 throughout your networking career. In this video, you’ll learn about the structure of an IPv4 address and an IPv6 address, and you’ll learn how to compress and uncompress IPv6 addresses.',
    img: 'https://img.youtube.com/vi/U2IxdEYgoEg/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=U2IxdEYgoEg'
  },
  {
    title: 'Configuring IPv6',
    description: 'IPv6 has a number of differences from traditional IPv4. In this video, you’ll learn about dual-stack routing, IPv6 tunneling protocols, and the many uses of the IPv6 Neighbor Discovery Protocol.',
    img: 'https://img.youtube.com/vi/NhRjwjt2Aog/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=NhRjwjt2Aog'
  },
  {
    title: 'Prioritizing Traffic',
    description: 'Most organizations are using many different applications, and certain applications will have a higher priority than others. In this video, you’ll learn how to prioritize this traffic as it traverses the network using packet shaping and quality of service options in your routers and switches.',
    img: 'https://img.youtube.com/vi/uEKDZqI5osA/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=uEKDZqI5osA'
  },
  {
    title: 'Network Address Translation',
    description: 'We rely on NAT for our Internet access and to allow external access to our internal services. In this video, you’ll learn about private IP addresses, port address translation, and port forwarding.',
    img: 'https://img.youtube.com/vi/JAYpfBvGVI8/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=JAYpfBvGVI8'
  },
  {
    title: 'Access Control Lists',
    description: 'Access control lists are used as packet filtering mechanisms on our enterprise networks. In this video, you’ll learn about ACLs and how they can be used to protect services on our networks.',
    img: 'https://img.youtube.com/vi/6Yj1-pZmHvY/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=6Yj1-pZmHvY'
  },
  {
    title: 'Circuit Switching and Packet Switching',
    description: 'There are many different ways to get data from one end of the network to the other. In this video, you’ll learn about some of the popular technologies that use circuit switching and packet switching.',
    img: 'https://img.youtube.com/vi/uBpacYBwYwM/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=uBpacYBwYwM'
  },
  {
    title: 'Software-Defined Networking',
    description: 'SDN has changed the way we design and implement services on modern networks. In this video, you’ll get an overview of SDN and how you can use distributed switching to virtualize your network.',
    img: 'https://img.youtube.com/vi/EdVOeGDYHCU/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=EdVOeGDYHCU'
  }
];
const DOMAIN_ONE_FOUR_RESOURCES: Resource[] = [
  {
    objectiveNumber: 1.4,
    title: 'Binary Math',
    description: "You’ll work with binary throughout your career, and you’ll often need to convert between binary and decimal values. In this video, you’ll learn my shortcut for quickly performing binary to decimal conversions.",
    img: 'https://img.youtube.com/vi/mIbNZzoWE3k/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=mIbNZzoWE3k'
  },
  {
    title: 'IPv4 Addresses',
    description: "Configuring IPv4 is more than just a single IP address. In this video, you’ll learn about the structure of an IPv4 address and the important configuration options to use IPv4 on your network.",
    img: 'https://img.youtube.com/vi/aEMtAFvouNU/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=aEMtAFvouNU'
  },
  {
    title: 'Classful Subnetting',
    description: "The first step in learning to subnet IPv4 is to understand the starting point. In this video, you’ll learn about IP classes and how to quickly calculate network values from an IP address and subnet mask.",
    img: 'https://img.youtube.com/vi/GxE395bCANM/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=GxE395bCANM'
  },
  {
    title: 'IPv4 Subnet Masks',
    description: "An important skill when working with IP subnets is the ability to quickly translate between dotted-decimal notation and CIDR-block notation. In this video, you’ll learn how to quickly calculate these subnet mask notations.",
    img: 'https://img.youtube.com/vi/L3dsWxn5RBU/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=L3dsWxn5RBU'
  },
  {
    title: 'IPv6 Subnet Masks',
    description: "Subnetting an IPv6 network is a bit less involved than IPv4. In this video, you’ll learn how to quickly configure IPv6 subnets for your network.",
    img: 'https://img.youtube.com/vi/pQ4CnCQH1QE/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=pQ4CnCQH1QE'
  },
  {
    title: 'Calculating IP Subnets and Hosts',
    description: "The process of subnetting an IPv4 address can be calculated quickly with powers of two. In this video, you’ll learn how to quickly calculate the number of IP subnets and hosts per IP subnet.",
    img: 'https://img.youtube.com/vi/qQEaAb_p8_E/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=qQEaAb_p8_E'
  },
  {
    title: 'Seven Second Subnetting',
    description: "Subnetting with (almost) zero math. In seven seconds or less!",
    img: 'https://img.youtube.com/vi/ZxAwQB8TZsM/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=ZxAwQB8TZsM'
  },
  {
    title: 'Assigning IPv4 Addresses',
    description: "There are many different ways to configure a device with an IPv4 address. In this video, you’ll learn about DHCP, manual addressing, DHCP reservations, and APIPA.",
    img: 'https://img.youtube.com/vi/Q0Aq_cYBcR0/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=Q0Aq_cYBcR0'
  },
  {
    title: 'Assigning IPv6 Addresses',
    description: "The IPv6 addressing of a device has similarities to IPv4, but there are also some significant differences. In this video, you’ll learn about DHCPv6 and how to modify a MAC address for use as a static IP address.",
    img: 'https://img.youtube.com/vi/lfCFsniHsPk/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=lfCFsniHsPk'
  },
];
const DOMAIN_ONE_FIVE_RESOURCES: Resource[] = [
  {
    objectiveNumber: 1.5,
    title: 'Network Topologies',
    description: "We often reference our network topologies as standard types, such as star, ring, and mesh. In this video, you’ll learn about physical and logical network documentation using these standard network topologies.",
    img: 'https://img.youtube.com/vi/4nPnQVaRj4k/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=4nPnQVaRj4k'
  },
  {
    title: 'Common Network Types',
    description: "We use a number of different network types throughout our day. In this video, you’ll learn about the different network types that are used to get our data across the Internet.",
    img: 'https://img.youtube.com/vi/GhHIOv3tIcE/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=GhHIOv3tIcE'
  },
  {
    title: 'Internet of Things Topologies',
    description: "We’re connecting an increasing number of devices to the Internet. These Internet of Things topologies are similar to traditional networks, but there are some important differences when compared to traditional networks. In this video, you’ll learn about some of the more popular IoT topologies, such as Z-Wave, ANT+, NFC, and more.",
    img: 'https://img.youtube.com/vi/g9F5FauEWL4/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=g9F5FauEWL4'
  },
];
const DOMAIN_ONE_SIX_RESOURCES: Resource[] = [
  {
    objectiveNumber: 1.6,
    title: 'Wireless Standards',
    description: "There have been many 802.11 wireless standards through the years. In this video, you’ll learn about the differences between 802.11a, 802.11b, 802.11g, 802.11n, and 802.11ac.",
    img: 'https://img.youtube.com/vi/r3pZ0WYSk9g/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=r3pZ0WYSk9g'
  },
  {
    title: 'Cellular Network Standards',
    description: "Cellular networks are complex technologies that have been made easy enough for everyone to use. In this video, you’ll learn about GSM, CDMA and LTE cellular technologies.",
    img: 'https://img.youtube.com/vi/GShWfJH6p2c/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=GShWfJH6p2c'
  },
  {
    title: 'Wireless Network Technologies',
    description: "802.11 wireless network technologies are many and varied. In this video, you’ll learn about 802.11 frequency use, MIMO, MU-MIMO, power levels, antenna types, and more.",
    img: 'https://img.youtube.com/vi/eV9Mu3njz_M/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=eV9Mu3njz_M'
  },
];
const DOMAIN_ONE_SEVEN_RESOURCES: Resource[] = [
  {
    objectiveNumber: 1.7,
    title: 'Cloud Services and Delivery Models',
    description: "The cloud has become an integrated part of today’s networks. In this video, you’ll learn about various cloud delivery models and how to manage cloud security policies.",
    img: 'https://img.youtube.com/vi/iiUbTb3s1xc/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=iiUbTb3s1xc'
  },
];
const DOMAIN_ONE_EIGHT_RESOURCES: Resource[] = [
  {
    objectiveNumber: 1.8,
    title: 'An Overview of DNS',
    description: "Domain Name Services provide an important conversion between FQDN and IP address. In this video, you’ll learn about the process that DNS uses to resolve a fully-qualified domain name to an IP address.",
    img: 'https://img.youtube.com/vi/VqQQMXNhZBM/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=VqQQMXNhZBM'
  },
  {
    title: 'DNS Record Types',
    description: "DNS uses many different resource record types for network name services. In this video, you’ll learn about the DNS forward lookup file and some of the most common DNS record types.",
    img: 'https://img.youtube.com/vi/D37RhTJ0ALY/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=D37RhTJ0ALY'
  },
  {
    title: 'DHCP Addressing Overview',
    description: "We rely on DHCP for the automatic configuration of our network devices. In this video, you’ll learn about the four steps of the DHCP process and how a DHCP relay can provide flexibility with DHCP services.",
    img: 'https://img.youtube.com/vi/uLJpp8HFNBc/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=uLJpp8HFNBc'
  },
  {
    title: 'Configuring DHCP',
    description: "There are many options when configuring a DHCP server. In this video, you’ll learn about DHCP scopes, address allocation options, address reservations, and DHCP lease timers.",
    img: 'https://img.youtube.com/vi/pEDFFH0Y4C4/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=pEDFFH0Y4C4'
  },
  {
    title: 'An Overview of NTP',
    description: "We rely on NTP to synchronize the clocks on all of our network-connected devices. In this video, you’ll learn about NTP servers, NTP clients, and how to configure NTP options on your workstation.",
    img: 'https://img.youtube.com/vi/1GtySPUW-XA/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=1GtySPUW-XA'
  },
];
const CONCEPTS_RESOURCES: Resource[][] = [
  DOMAIN_ONE_ONE_RESOURCES, DOMAIN_ONE_TWO_RESOURCES,
  DOMAIN_ONE_THREE_RESOURCES, DOMAIN_ONE_FOUR_RESOURCES,
  DOMAIN_ONE_FIVE_RESOURCES, DOMAIN_ONE_SIX_RESOURCES,
  DOMAIN_ONE_SEVEN_RESOURCES, DOMAIN_ONE_EIGHT_RESOURCES
];

/**
 * Resources 1.0 - Concepts
 **/
const DOMAIN_TWO_ONE_RESOURCES: Resource[] = [
  {
    objectiveNumber: 2.1,
    title: 'Copper Cabling',
    description: 'Copper cables are the foundation of our networks, but not every copper cable is the same. In this video, you’ll learn about unshielded and shielded twisted pair, network cabling standards, and different types of network cabling.',
    img: 'https://img.youtube.com/vi/v9m6uBaKD2s/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=v9m6uBaKD2s'
  },
  {
    title: 'Copper Connectors',
    description: 'There are many different ways to connect copper cable to your networking equipment. In this video, you’ll learn about RJ11, RJ45, BNC, DB-9/DB-25, and F connectors.',
    img: 'https://img.youtube.com/vi/_MF8oQdTCgo/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=_MF8oQdTCgo'
  },
  {
    title: 'Optical Fiber',
    description: 'Optical fiber operates with very different physics than copper cabling. In this video, you’ll learn about multimode fiber, single-mode fiber, and the difference between UPC and APC connections.',
    img: 'https://img.youtube.com/vi/_AnY7JMKVCg/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=_AnY7JMKVCg'
  },
  {
    title: 'Optical Fiber Connectors',
    description: 'The connector types between fiber-connected devices can vary. In this video, you’ll learn about ST, SC, LC, and MT-RJ fiber connectors.',
    img: 'https://img.youtube.com/vi/WyMNUdi0ZRM/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=WyMNUdi0ZRM'
  },
];

const INFRASTRUCTURE_RESOURCES: Resource[][] = [
  DOMAIN_TWO_ONE_RESOURCES
];



export const RESOURCES: Resource[][] = [
  ...CONCEPTS_RESOURCES, ...INFRASTRUCTURE_RESOURCES
];
