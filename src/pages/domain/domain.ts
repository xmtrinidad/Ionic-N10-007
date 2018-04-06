import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Domain } from '../../models/domain';
import { Section } from '../../models/section';
import { Objective } from '../../models/objective';
import { DomainService } from '../../services/domain.service';
import { ObjectiveDetailPage } from '../objective-detail/objective-detail';
@Component({
  selector: 'page-domain',
  templateUrl: 'domain.html',
})
export class DomainPage implements OnInit{
  domain: Domain;
  section: Section;
  domainTitle: string;
  objectiveDetailPage = ObjectiveDetailPage;

  constructor(
    private domainServie: DomainService,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ngOnInit() {
    this.domain = this.navParams.data;
    this.section = this.domainServie.getSection(this.domain);
    this.domainTitle = this.domain.title.slice(4).toLowerCase();
  }

  objectiveSelected(objective: Objective, color: string) {
    this.navCtrl.push(ObjectiveDetailPage, {domain: this.domainTitle, objective: objective, color: color});
  }

  getColor() {
    return this.domainTitle;
  }
}
