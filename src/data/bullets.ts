import { Bullet } from '../models/bullet';

export const BULLETS: Bullet[] = [
  {
    objectiveNumber: 1.1,
    bullets: [
      { title: 'Explain the purposes and uses of ports and protocols.',
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
  },
  {
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
  }
];
