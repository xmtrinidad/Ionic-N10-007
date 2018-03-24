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
    { title: 'Firewall'},
    { title: 'Router'},
    { title: 'Switch'},
    { title: 'Hub'},
    { title: 'Bridge'},
    { title: 'Modems'},
    { title: 'Wireless access point'},
    { title: 'Media converter'},
    { title: 'Wireless range extender'},
    { title: 'VoIP endpoint'},
  ]
};
const DOMAIN_TWO_THREE: Bullet = {
  objectiveNumber: 2.3,
  bullets: [
    { title: 'Multilayer switch'},
    { title: 'Wireless controller'},
    { title: 'Load balancer'},
    { title: 'IDS/IPS'},
    { title: 'Proxy server'},
    { title: 'VPN concentrator'},
    { title: 'AAA/RADIUS server'},
    { title: 'UTM appliance'},
    { title: 'NGFW/Layer 7 firewall'},
    { title: 'VoIP PBX'},
    { title: 'VoIP gateway'},
    { title: 'Content filter'},
  ]
};
const DOMAIN_TWO_FOUR: Bullet = {
  objectiveNumber: 2.4,
  bullets: [
    {
      title: 'Virtual networking components',
      subBullets: [
        'Virtual switch', 'Virtual firewall', 'Virtual NIC',
        'Virtual router', 'Hypervisor'
      ]
    },
    {
      title: 'Network storage types',
      subBullets: [
        'NAS', 'SAN'
      ]
    },
    {
      title: 'Connection type',
      subBullets: [
        'FCoE',
        'Fibre Channel',
        'iSCSI',
        'InfiniBand'
      ]
    },
    { title: 'Jumbo frame' }
  ]
};
const DOMAIN_TWO_FIVE: Bullet = {
  objectiveNumber: 2.5,
  bullets: [
    {
      title: 'Service type',
      subBullets: [
        'ISDN', 'T1/T3, E1/E3', 'OC-3 - OC-192', 'DSL, Dial-up, PRI',
        'Metropolitan Ethernet', 'Cable broadband'
      ]
    },
    {
      title: 'Transmission mediums',
      subBullets: [
        'Satellite, Copper', 'Fiber, Wireless'
      ]
    },
    {
      title: 'Characteristics of service',
      subBullets: [
        'MPLS, ATM', 'Frame relay', 'PPPoE, PPP', 'DMVPN, SIP trunk'
      ]
    },
    {
      title: 'Termination',
      subBullets: [
        'Demarcation point', 'CSU/DSU', 'Smart jack'
      ]
    }
  ]
};
const INFRASTRUCTURE: Bullet[] = [
  DOMAIN_TWO_ONE, DOMAIN_TWO_TWO, DOMAIN_TWO_THREE,
  DOMAIN_TWO_FOUR, DOMAIN_TWO_FIVE
];

/**
 * DOMAIN: 3.0 Operations
 */
const DOMAIN_THREE_ONE: Bullet = {
  objectiveNumber: 3.1,
  bullets: [
    { title: 'Diagram symbols'},
    { title: 'Standard operating procedures'},
    { title: 'Logical vs. physical diagrams'},
    { title: 'Rack diagrams'},
    { title: 'Change management documentation'},
    { title: 'Wiring and port locations'},
    { title: 'IDF/MDF documentation'},
    { title: 'Labeling'},
    { title: 'Networking configuration'},
    { title: 'Performance baselines'},
    { title: 'Inventory management'},
  ]
};
const DOMAIN_THREE_TWO: Bullet = {
  objectiveNumber: 3.2,
  bullets: [
    {
      title: 'Availability concepts',
      subBullets: [
        'Fault tolerance', 'High availability', 'Load balancing',
        'NIC teaming', 'Port aggregation', 'Clustering'
      ]
    },
    {
      title: 'Power management',
      subBullets: [
        'Battery backups/UPS', 'Power generators', 'Dual power supplies',
        'Redundant circuits'
      ]
    },
    {
      title: 'Recovery',
      subBullets: [
        'Cold, Warm, Hot sites', 'Backups: Full, differential, incremental',
        'Snapshots'
      ]
    },
    { title: 'MTT'},
    { title: 'MTBF'},
    { title: 'SLA requirements'}
  ]
};
const DOMAIN_THREE_THREE: Bullet = {
  objectiveNumber: 3.3,
  bullets: [
    {
      title: 'Processes',
      subBullets: [
        'Log reviewing', 'Port scanning', 'Vulnerability scanning',
        'Patch management: Rollback', 'Reviewing baselines',
        'Packet/traffic analysis'
      ]
    },
    {
      title: 'Event management',
      subBullets: [
        'Notifications', 'Alerts', 'SIEM'
      ]
    },
    {
      title: 'SNMP monitors',
      subBullets: [
        'MIB'
      ]
    },
    {
      title: 'Metrics',
      subBullets: [
        'Error rate', 'Utilization', 'Packet drops',
        'Bandwidth/throughput'
      ]
    }
  ]
};
const DOMAIN_THREE_FOUR: Bullet = {
  objectiveNumber: 3.4,
  bullets: [
    {
      title: 'VPN',
      subBullets: [
        'IPSec, SSL/TLS/DTLS', 'Site-to-site, Client-to-site'
      ]
    },
    {
      title: 'Remote file access',
      subBullets: [
        'FTP/FTPS', 'SFTP, TFTP'
      ]
    },
    {
      title: 'Out-of-band management',
      subBullets: [
        'Modem', 'Console router'
      ]
    },
    { title: 'HTTPS/management URL' },
    { title: 'RDP' },
    { title: 'SSH' },
    { title: 'VNC' },
    { title: 'Telnet' },
  ]
};
const DOMAIN_THREE_FIVE: Bullet = {
  objectiveNumber: 3.5,
  bullets: [
    { title: 'Privileged user agreement' },
    { title: 'Password policy' },
    { title: 'On-boarding/off-boarding' },
    { title: 'Licensing restrictions' },
    { title: 'International export controls' },
    { title: 'Data loss prevention' },
    { title: 'Remote access policies' },
    { title: 'Incident response policies' },
    { title: 'BYOD' },
    { title: 'AUP' },
    { title: 'NDA' },
    { title: 'System life-cycle', subBullets: [ 'Asset disposal' ] },
    { title: 'Safety procedures'}
  ]
};
const OPERATIONS: Bullet[] = [
  DOMAIN_THREE_ONE, DOMAIN_THREE_TWO, DOMAIN_THREE_THREE,
  DOMAIN_THREE_FOUR, DOMAIN_THREE_FIVE
];

/**
 * DOMAIN: 4.0 Security
 */
const DOMAIN_FOUR_ONE: Bullet = {
  objectiveNumber: 4.1,
  bullets: [
    {
      title: 'Detection',
      subBullets: [
        'Motion detection', 'Video surveillance',
        'Asset tracking tags', 'Tamper detection'
      ]
    },
    {
      title: 'Prevention',
      subBullets: [
        'Badges, Biometrics', 'Smart cards',
        'Key fob, Locks'
      ]
    }
  ]
};
const DOMAIN_FOUR_TWO: Bullet = {
  objectiveNumber: 4.2,
  bullets: [
    {
      title: 'Authorization, authentication, and Accounting',
      subBullets: [
        'RADIUS, TACACS+', 'Kerberos', 'Single sign-on',
        'Local authentication', 'LDAP', 'Certificates',
        'Auditing and logging'
      ]
    },
    {
      title: 'Multifactor authentication',
      subBullets: [
        'Something you know', 'Something you have',
        'Something you are', 'Somewhere you are',
        'Something you do'
      ]
    },
    {
      title: 'Access control',
      subBullets: [
        '802.1X, NAC', 'Port security', 'MAC filtering',
        'Captive portal', 'Access control lists'
      ]
    }
  ]
};
const DOMAIN_FOUR_THREE: Bullet = {
  objectiveNumber: 4.3,
  bullets: [
    { title: 'WPA, WPA2' },
    { title: 'TKIP-RC4' },
    { title: 'CCMP-AES' },
    { title: 'Geofencing' },
    {
      title: 'Authentication and authorization',
      subBullets: [
        'EAP/PEAP: EAP-FAST, EAP-TLS', 'Shared to open',
        'Preshared key', 'MAC filtering'
      ]
    }
  ]
};
const DOMAIN_FOUR_FOUR: Bullet = {
  objectiveNumber: 4.4,
  bullets: [
    {
      title: 'DoS',
      subBullets: [
        'Reflective', 'Amplified', 'Distributed'
      ]
    },
    { title: 'Social engineering' },
    { title: 'Insider threat' },
    { title: 'Logic bomb' },
    { title: 'Rogue access point' },
    { title: 'Evil twin' },
    { title: 'War driving' },
    { title: 'Phishing' },
    { title: 'Ransomware' },
    { title: 'DNS/ARP poisoning' },
    { title: 'Spoofing' },
    { title: 'Deauthentication' },
    { title: 'Brute force' },
    { title: 'VLAN hopping' },
    { title: 'Man-in-the-middle' },
    { title: 'Exploits vs vulnerabilities' },
  ]
};
const DOMAIN_FOUR_FIVE: Bullet = {
  objectiveNumber: 4.5,
  bullets: [
    { title: 'Changing default credentials' },
    { title: 'Avoiding common passwords' },
    { title: 'Upgrading firmware' },
    { title: 'Patching and updates' },
    { title: 'File hashing' },
    { title: 'Disabling unnecessary services' },
    { title: 'Using secure protocols' },
    { title: 'Generating new keys' },
    {
      title: 'Disabling unused ports',
      subBullets: [
        'IP ports', 'Device ports (physical and virtual)'
      ]
    }
  ]
};
const DOMAIN_FOUR_SIX: Bullet = {
  objectiveNumber: 4.6,
  bullets: [
    { title: 'Signature management' },
    { title: 'Device hardening' },
    { title: 'Change native VLAN' },
    {
      title: 'Switch port protection',
      subBullets: [
        'Spanning tree', 'Flood guard', 'BPDU guard',
        'Root guard', 'DHCP snooping'
      ]
    },
    {
      title: 'Network segmentation',
      subBullets: [
        'DMZ, VLAN'
      ]
    },
    { title: 'Privileged user account' },
    { title: 'File integrity monitoring' },
    { title: 'Role separation' },
    { title: 'Restricting access via ACLs' },
    { title: 'Honeypot/honeynet' },
    { title: 'Penetration testing' },
  ]
};
const SECURITY: Bullet[] = [
  DOMAIN_FOUR_ONE, DOMAIN_FOUR_TWO, DOMAIN_FOUR_THREE,
  DOMAIN_FOUR_FOUR, DOMAIN_FOUR_FIVE, DOMAIN_FOUR_SIX
];

const DOMAIN_FIVE_ONE: Bullet = {
  objectiveNumber: 5.1,
  bullets: [
    {
      title: 'Identify the problem',
      subBullets: [
        'Gather information', 'Duplicate if possible',
        'Question users', 'Identify symptoms',
        'Determine if anything has changed',
        'Approach multiple problems differently'
      ]
    },
    {
      title: 'Establish a theory of probable cause',
      subBullets: [
        'Question the obvious',
        'Consider multiple approaches',
      ]
    },
    {
      title: 'Test the theory to determine the cause',
      subBullets: [
        'Once confirmed, determine next steps',
        'Establish new theories or escalate'
      ]
    },
    {
      title: 'Establish a plan of action' ,
      subBullets: [
        'Identify potential effects'
      ]
    },
    { title: 'Implement the solution or escalate' },
    {
      title: 'Verify full system functionality',
      subBullets: [
        'If applicable, implement preventive measures'
      ]
    },
    { title: 'Document findings, actions and outcomes'}
  ]
};
const DOMAIN_FIVE_TWO: Bullet = {
  objectiveNumber: 5.2,
  bullets: [
    {
      title: 'Hardware tools',
      subBullets: [
        'Crimper, Cable tester', 'Punchdown tool',
        'OTDR, Light meter', 'Tone generator', 'Loopback adapter',
        'Multimeter', 'Spectrum analyzer'
      ]
    },
    {
      title: 'Software tools',
      subBullets: [
        'Packet sniffer, Port scanner',
        'Protocol analyzer', 'WiFi analyzer',
        'Bandwidth speed tester'
      ]
    },
    {
      title: 'Command line',
      subBullets: [
        'ipconfig, ifconfig', 'iptables, netstat',
        'tcpdump, pathping', 'nmap, route', 'arp, dig'
      ]
    }
  ]
};
const DOMAIN_FIVE_THREE: Bullet = {
  objectiveNumber: 5.3,
  bullets: [
    { title: 'Attenuation' },
    { title: 'Latency' },
    { title: 'Jitter' },
    { title: 'Crosstalk' },
    { title: 'EMI' },
    { title: 'Open/short' },
    { title: 'Incorrect pin-out' },
    { title: 'Incorrect cable type' },
    { title: 'Bad port' },
    { title: 'Transceiver mismatch' },
    { title: 'TX/RX reverse' },
    { title: 'Duplex/speed mismatch' },
    { title: 'Damaged cables' },
    { title: 'Bent pins' },
    { title: 'Bottlenecks' },
    { title: 'VLAN mismatch' },
    { title: 'Network connection LED status indicators' },
  ]
};
const DOMAIN_FIVE_FOUR: Bullet = {
  objectiveNumber: 5.4,
  bullets: [
    { title: 'Reflection/Refraction' },
    { title: 'Absorption' },
    { title: 'Latency' },
    { title: 'Jitter' },
    { title: 'Attenuation' },
    { title: 'Incorrect antenna type' },
    { title: 'Interference' },
    { title: 'Incorrect antenna placement' },
    { title: 'Channel overlap' },
    { title: 'Overcapacity' },
    { title: 'Distance limitations' },
    { title: 'Frequency mismatch' },
    { title: 'Wrong SSID' },
    { title: 'Wrong passphrase' },
    { title: 'Security type mismatch' },
    { title: 'Power levels' },
    { title: 'Signal-to-noise ratio' },
  ]
};
const DOMAIN_FIVE_FIVE: Bullet = {
  objectiveNumber: 5.5,
  bullets: [
    { title: 'Names not resolving' },
    { title: 'Incorrect gateway/netmask' },
    { title: 'Duplicate IP addresses' },
    { title: 'Duplicate MAC addresses' },
    { title: 'Expired IP addresses' },
    { title: 'Rogue DHCP server' },
    { title: 'Untrusted SSL certificate' },
    { title: 'Incorrect time' },
    { title: 'Exhausted DHCP scope' },
    { title: 'Blocked TCP/UDP ports' },
    { title: 'Incorrect host-based firewall settings' },
    { title: 'Incorrect ACL settings' },
    { title: 'Unresponsive service' },
    { title: 'Hardware failure' },
  ]
};
const TROUBLESHOOTING: Bullet[] = [
  DOMAIN_FIVE_ONE, DOMAIN_FIVE_TWO, DOMAIN_FIVE_THREE,
  DOMAIN_FIVE_FOUR, DOMAIN_FIVE_FIVE
];

export const BULLETS: Bullet[] = [
  ...CONCEPTS,
  ...INFRASTRUCTURE,
  ...OPERATIONS,
  ...SECURITY,
  ...TROUBLESHOOTING
];


