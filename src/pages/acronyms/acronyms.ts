import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AcronymService } from '../../services/acronym.service';
import { Acronym } from '../../models/acronym';
@Component({
  selector: 'page-acronyms',
  templateUrl: 'acronyms.html',
})
export class AcronymsPage implements OnInit{
  acronyms: Acronym[] = [];

  constructor(
    private toastCtrl: ToastController,
    private acronymService: AcronymService,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ngOnInit() {
    this.getAcronymsList();
  }

  /**
   * Convert acronym list txt file to object and push
   * onto acronyms
   */
  getAcronymsList() {
    this.acronymService.getAcronyms()
      .subscribe((data: any) => {
        const splitData = data.split('\n');
        for (let i = 0; i < splitData.length - 1; i+=2) {
          const acronym: Acronym = {
            acronym: splitData[i],
            full: splitData[i+1]
          };
          this.acronyms.push(acronym);
        }
      });
  }


  presentToast(fullAcronym: string) {
    let toast = this.toastCtrl.create({
      message: fullAcronym,
      duration: 3000,
      showCloseButton: true
    });
    toast.present();
  }
}
