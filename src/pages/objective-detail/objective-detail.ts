import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Objective } from '../../models/objective';
import { DomainService } from '../../services/domain.service';
import { Bullet } from '../../models/bullet';


@Component({
  selector: 'page-objective-detail',
  templateUrl: 'objective-detail.html',
})
export class ObjectiveDetailPage implements OnInit {
  objective: Objective;
  color: string;
  bullets: Bullet;

  constructor(
    private domainService: DomainService,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ngOnInit() {
    this.getObjectiveInfo();
    console.log(this.bullets);
  }

  getObjectiveInfo() {
    this.objective = this.navParams.data.objective;
    this.color = this.navParams.data.color;
    this.bullets = this.domainService.getBullets(this.objective.sectionNumber);
  }

  onHomeClick() {
    this.navCtrl.popToRoot();
  }
}
