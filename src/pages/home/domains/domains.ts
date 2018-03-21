import { Component, OnInit } from '@angular/core';
import { DomainService } from '../../../services/domain.service';
import { Domain } from '../../../models/domain';
import { NavController } from 'ionic-angular';
import { DomainPage } from '../../domain/domain';

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
    this.navCtrl.push(DomainPage, domainClicked)
  }
}
