import { Injectable } from '@angular/core';
import { Domain } from '../models/domain';

import { DOMAINS } from '../data/domains';
import { SECTIONS } from '../data/sections';




@Injectable()
export class DomainService {

  getDomains() {
    return DOMAINS;
  }

  getSection(domain: Domain) {
    return SECTIONS.find(section => section.domainId === domain.id);
  }

}
