import { Component, OnInit } from '@angular/core';
import { DomainService } from '../../../services/domain.service';
import { Domain } from '../../../models/domain';
import { NavController } from 'ionic-angular';
import { DomainPage } from '../../domain/domain';
import { AcronymsPage } from '../../acronyms/acronyms';

@Component({
  selector: 'domains',
  templateUrl: 'domains.html'
})
export class DomainsComponent implements OnInit {
  domains: Domain[];

  constructor(
    private navCtrl: NavController,
    private domainService: DomainService) {}

  ngOnInit() {
    this.domains = this.domainService.getDomains();
  }

  onDomainClick(domainClicked: Domain) {
    if (domainClicked.id === 5) {
      this.navCtrl.push(AcronymsPage, domainClicked);
    } else {
      this.navCtrl.push(DomainPage, domainClicked);
    }

  }
}
