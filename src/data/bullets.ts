import { Bullet } from '../models/bullet';


/**
 * DOMAIN: 1.0 Concepts
 */
const DOMAIN_ONE_ONE: Bullet = {
    objectiveNumber: 1.1,
    bullets: [
      { title: 'Protocols and ports',
        subBullets: [
          'SSH 22', 'DNS 53', 'SMTP 25', 'SFTP 22', 'FTP 20, 21', 'TFTP 69', 'TELNET 23',
          'DHCP 67, 68', 'HTTP 80', 'HTTPS 443', 'SNMP 161', 'RDP 3389', 'NTP 123',
          'SIP 5060, 5061', 'SMB 445', 'POP 110', 'IMAP 143', 'LDAP 389', 'LDAPS 636',
          'H.323 1720'
        ]
      },
      {
        title: 'Protocol types',
        subBullets: ['ICMP', 'UDP', 'TCP', 'IP']
      },
      {
        title: 'Connection-oriented vs connectionless'
      }
    ],
  };
const DOMAIN_ONE_TWO: Bullet = {
    objectiveNumber: 1.2,
    bullets: [
      {title: 'Layer 1 - Physical'},
      {title: 'Layer 2 - Data link'},
      {title: 'Layer 3 - Network'},
      {title: 'Layer 4 - Transport'},
      {title: 'Layer 5 - Session'},
      {title: 'Layer 6 - Presentation'},
      {title: 'Layer 7 - Application'},
    ]
  };
const DOMAIN_ONE_THREE: Bullet = {
    objectiveNumber: 1.3,
    bullets: [
      {
        title: 'Properties of network traffic',
        subBullets: [
          'Broadcast domains', 'CSMA/CD', 'CSMA/CA', 'Collision domains',
          'Protocol data units', 'MTU', 'Broadcast', 'Multicast', 'Unicast'
        ]
      },
      {
        title: 'Segmentation and interface properties',
        subBullets: [
          'VLANs', 'Trunking (802.1q)', 'Tagging and untagging ports',
          'Port mirroring', 'Switching loops/spanning tree', 'PoE and PoE+',
          '802.3af', '802.3at', 'DMZ', 'MAC address table', 'ARP table'
        ]
      },
      {
        title: 'Routing',
        subBullets: [
          'Routing protocols (IPv4 & IPv6)', 'Distance-vector (RIP, EIGRP)',
          'Link-state (OSPF)', 'Hybrid (BGP)', 'Routing types (Static/Dynamic)',
        ]
      },
      {
        title: 'IPv6 Concepts',
        subBullets: [
          'Addressing', 'Tunneling', 'Dual stack', 'Router advertisement',
          'Neighbor discovery'
        ]
      },
      {
        title: 'Performance concepts',
        subBullets: [
          'Traffic shaping', 'QoS', 'Diffserv', 'CoS'
        ]
      },
      {title: 'NAT/PAT'},
      {title: 'Port forwarding'},
      {title: 'Access control list'},
      {title: 'Distributed switching'},
      {title: 'Packet-switched vs circuit-switched network'},
      {title: 'Software-defined networking'},
    ]
  };
const DOMAIN_ONE_FOUR: Bullet = {
    objectiveNumber: 1.4,
    bullets: [
      {title: 'Private vs public'},
      {title: 'Loopback and reserved'},
      {title: 'Default gateway'},
      {title: 'Virtual IP'},
      {title: 'Subnet mask'},
      {
        title: 'Subnetting',
        subBullets: ['Classful: A, B, C, D and E', 'Classless: VLSM, CIDR']
      },
      {
        title: 'Address assignments',
        subBullets: ['DHCP', 'DHCPv6', 'Static', 'APIPA', 'EUI64', 'IP reservations']
      }
    ]
  };
const DOMAIN_ONE_FIVE: Bullet = {
  objectiveNumber: 1.5,
  bullets: [
    {
      title: 'Wired topologies',
      subBullets: [
        'Logical vs. physical', 'Star', 'Ring', 'Mesh', 'Bus'
      ]
    },
    {
      title: 'Wireless topologies',
      subBullets: [
          'Mesh', 'Ad hoc', 'Infrastructure'
        ]
    },
    {
      title: 'Types',
      subBullets: [
          'LAN, WLAN', 'MAN, WAN', 'CAN, SAN, PAN'
        ]
    },
    {
      title: 'IoT Technologies',
      subBullets: [
        'Z-Wave, Ant+', 'Bluetooth', 'NFC, IR', 'RFID, 802.11'
      ]
    },
  ]
};
const DOMAIN_ONE_SIX: Bullet = {
  objectiveNumber: 1.6,
  bullets: [
    { title: '802.11 standards', subBullets: ['a, b, g, n, ac'] },
    { title: 'Cellular', subBullets: ['GSM', 'TDMA', 'CDMA'] },
    { title: 'Frequencies', subBullets: ['2.4GHz', '5.0GHz'] },
    { title: 'Speed and distance requirements' },
    { title: 'Channel bandwidth' },
    { title: 'Channel bonding' },
    { title: 'MIMO/MU-MIMO' },
    { title: 'Unidirectional/omnidirectional' },
    { title: 'Site surveys' },
  ]
};
const DOMAIN_ONE_SEVEN: Bullet = {
  objectiveNumber: 1.7,
  bullets: [
    { title: 'Types of services', subBullets: ['SaaS', 'PaaS', 'IaaS'] },
    { title: 'Cloud delivery methods', subBullets: ['Private', 'Public', 'Hybrid'] },
    { title: 'Connectivity methods'},
    { title: 'Security implications/considerations'},
    { title: 'Relationship between local and cloud resources'}
  ]
};
const DOMAIN_ONE_EIGHT: Bullet = {
  objectiveNumber: 1.8,
  bullets: [
    {
      title: 'DNS service & Record Types',
      subBullets: [
        'A, AAA, TXT, SRV, MX, CNAME, NS, PTR',
        'Internal vs. external DNS', '3rd party/cloud hosted DNS',
        'Hierarchy', 'Forward vs. reverse zone'
      ]
    },
    {
      title: 'DHCP service',
      subBullets: [
        'MAC reservations', 'Pools', 'IP exclusions', 'Scope options',
        'Lease time, TTL', 'DHCP relay/IP helper'
      ]
    },
    { title: 'NTP'},
    { title: 'IPAM'},
  ]
};

const CONCEPTS: Bullet[] = [
  DOMAIN_ONE_ONE, DOMAIN_ONE_TWO, DOMAIN_ONE_THREE, DOMAIN_ONE_FOUR,
  DOMAIN_ONE_FIVE, DOMAIN_ONE_SIX, DOMAIN_ONE_SEVEN, DOMAIN_ONE_EIGHT
];

/**
 * DOMAIN: 2.0 Infrastructure
 */
const DOMAIN_TWO_ONE: Bullet = {
  objectiveNumber: 2.1,
  bullets: [
    {
      title: 'Media types',
      subBullets: ['Copper: UTP, STP, Coaxial', 'Fiber: Single-mode, Multimode']
    },
    { title: 'Plenum vs PVC' },
    {
      title: 'Connector types',
      subBullets: [
        'Copper: RJ-45, RJ-11, BNC, DB-9, DB-25, F-Type',
        'Fiber: LC, ST, SC (APC, UPC, MTRJ)'
      ]
    },
    {
      title: 'Transceivers',
      subBullets: [
        'SFP, GBIC', 'SFP+, QSFP', 'Charateristics of fiber transceivers',
      ]
    },
    {
      title: 'Termination points',
      subBullets: [
        '66 block, 110 block', 'Patch panel', 'Fiber distribution panel'
      ]
    },
    {
      title: 'Copper cable standards',
      subBullets: [
        'Cat 3, Cat5, Cat5e', 'Cat 6, Cat6a, Cat 7', 'RG-6, RG-59'
      ]
    },
    {
      title: 'Copper termination standards',
      subBullets: [
        'TIA/EIA 568a', 'TIA/EIA 568b', 'Crossover', 'Straight-through'
      ]
    },
    {
      title: 'Ethernet deployment standards',
      subBullets: [
        '100BaseT, 1000BaseT', '1000BaseLX, 1000BaseSX, 10GBaseT'
      ]
    }
  ]
};

const DOMAIN_TWO_TWO: Bullet = {
  objectiveNumber: 2.2,
  bullets: [
    { title: '', subBullets: [] }
  ]
};

const DOMAIN_TWO_THREE: Bullet = {
  objectiveNumber: 2.3,
  bullets: [
    { title: '', subBullets: [] }
  ]
};

const DOMAIN_TWO_FOUR: Bullet = {
  objectiveNumber: 2.4,
  bullets: [
    { title: '', subBullets: [] }
  ]
};

const DOMAIN_TWO_FIVE: Bullet = {
  objectiveNumber: 2.5,
  bullets: [
    { title: '', subBullets: [] }
  ]
};

const INFRASTRUCTURE: Bullet[] = [
  DOMAIN_TWO_ONE, DOMAIN_TWO_TWO, DOMAIN_TWO_THREE,
  DOMAIN_TWO_FOUR, DOMAIN_TWO_FIVE
];

export const BULLETS: Bullet[] = [ ...CONCEPTS, ...INFRASTRUCTURE ];


