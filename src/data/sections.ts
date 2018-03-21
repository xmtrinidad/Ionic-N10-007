import { Section } from '../models/section';

export const SECTIONS: Section[] = [
  {
    domainId: 0,
    objectives: [
      {sectionNumber: 1.1, title: 'Explain the purposes and uses of ports and protocols.'},
      {sectionNumber: 1.2, title: 'Explain devices, applications, protocols and \n' +
        'services at their appropriate OSI layers.'},
      {sectionNumber: 1.3, title: 'Explain the concepts and characteristics of routing and switching.'},
      {sectionNumber: 1.4, title: 'Given a scenario, configure the appropriate IP addressing components.'},
      {sectionNumber: 1.5, title: 'Compare and contrast the characteristics of \n' +
        'network topologies, types and technologies.'},
      {sectionNumber: 1.6, title: 'Given a scenario, implement the appropriate \n' +
        'wireless technologies and configurations.'},
      {sectionNumber: 1.7, title: 'Summarize cloud concepts and their purposes.'},
      {sectionNumber: 1.8, title: 'Explain the functions of network services.'},
    ]
  },
  {
    domainId: 1,
    objectives: [
      {sectionNumber: 2.1, title: 'Given a scenario, deploy the appropriate cabling solution.'},
      {sectionNumber: 2.2, title: 'Given a scenario, determine the appropriate placement of \n' +
        'networking devices on a network and install/configure them.'},
      {sectionNumber: 2.3, title: 'Explain the purposes and use cases for advanced networking devices.'},
      {sectionNumber: 2.4, title: 'Explain the purposes of virtualization and \n' +
        'network storage technologies.'},
      {sectionNumber: 2.5, title: 'Compare and contrast WAN technologies.'},
    ]
  },
  {
    domainId: 2,
    objectives: [
      {sectionNumber: 3.1, title: 'Given a scenario, use appropriate documentation \n' +
        'and diagrams to manage the network.'},
      {sectionNumber: 3.2, title: 'Compare and contrast business continuity \n' +
        'and disaster recovery concepts.'},
      {sectionNumber: 3.3, title: 'Explain common scanning, monitoring and patching \n' +
        'processes and summarize their expected outputs.'},
      {sectionNumber: 3.4, title: 'Given a scenario, use remote access methods.'},
      {sectionNumber: 3.5, title: 'Identify policies and best practices.'}
    ]
  },
  {
    domainId: 3,
    objectives: [
      {sectionNumber: 4.1, title: 'Summarize the purposes of physical security devices.'},
      {sectionNumber: 4.2, title: 'Explain authentication and access controls.'},
      {sectionNumber: 4.3, title: 'Given a scenario, secure a basic wireless network.'},
      {sectionNumber: 4.4, title: 'Summarize common networking attacks.'},
      {sectionNumber: 4.5, title: 'Given a scenario, implement network device hardening.'},
      {sectionNumber: 4.6, title: 'Explain common mitigation techniques and their purposes.'},
    ]
  },
  {
    domainId: 4,
    objectives: [
      {sectionNumber: 5.1, title: 'Explain the network troubleshooting methodology.'},
      {sectionNumber: 5.2, title: 'Given a scenario, use the appropriate tool.'},
      {sectionNumber: 5.3, title: 'Given a scenario, troubleshoot common wired \n' +
        'connectivity and performance issues.'},
      {sectionNumber: 5.4, title: 'Given a scenario, troubleshoot common wireless \n' +
        'connectivity and performance issues.'},
      {sectionNumber: 5.5, title: 'Given a scenario, troubleshoot common network service issues.'},
    ]
  }
];
