import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Domain } from '../../models/domain';
import { Section } from '../../models/section';
import { Objective } from '../../models/objective';
import { DomainService } from '../../services/domain.service';
import { ObjectiveDetailPage } from '../objective-detail/objective-detail';


@IonicPage()
@Component({
  selector: 'page-domain',
  templateUrl: 'domain.html',
})
export class DomainPage implements OnInit{
  domain: Domain;
  section: Section;
  objectiveDetailPage = ObjectiveDetailPage;

  constructor(
    private domainServie: DomainService,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ngOnInit() {
    this.domain = this.navParams.data;
    this.section = this.domainServie.getSection(this.domain);
  }

  objectiveSelected(objective: Objective, color: string) {
    const domainTitle = this.domain.title.substr(3);
    this.navCtrl.push(ObjectiveDetailPage, {domain: domainTitle, objective: objective, color: color});
  }
}
