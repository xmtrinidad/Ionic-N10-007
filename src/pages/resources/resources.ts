import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Resource } from '../../models/resource';

@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html',
})
export class ResourcesPage {

  resources: Resource[];
  domainTitle: string;
  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.resources = this.navParams.get('resources');
    this.domainTitle = this.navParams.get('domain');
  }

  onModalClose() {
    this.viewCtrl.dismiss()
  }
}
