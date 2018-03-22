import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Objective } from '../../models/objective';


@Component({
  selector: 'page-objective-detail',
  templateUrl: 'objective-detail.html',
})
export class ObjectiveDetailPage implements OnInit {
  objective: Objective;
  color: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    console.log(this.navParams.data);
    this.objective = this.navParams.data.objective;
    this.color = this.navParams.data.color;
  }

  onHomeClick() {
    this.navCtrl.popToRoot();
  }
}
