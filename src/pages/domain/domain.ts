import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Domain } from '../../models/domain';
import { Objective, Section } from '../../models/section';
import { DomainService } from '../../services/domain.service';

@IonicPage()
@Component({
  selector: 'page-domain',
  templateUrl: 'domain.html',
})
export class DomainPage implements OnInit{
  domain: Domain;
  section: Section;

  constructor(
    private domainServie: DomainService,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ngOnInit() {
    this.domain = this.navParams.data;
    this.section = this.domainServie.getSection(this.domain);
  }

  objectiveSelected(objective: Objective) {
    console.log(objective);
  }
}
