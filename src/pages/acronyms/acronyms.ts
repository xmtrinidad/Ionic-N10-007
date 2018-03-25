import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController } from 'ionic-angular';
import { AcronymService } from '../../services/acronym.service';
import { Acronym } from '../../models/acronym';
import { SortPopoverPage } from '../sort-popover/sort-popover';
@Component({
  selector: 'page-acronyms',
  templateUrl: 'acronyms.html',
})
export class AcronymsPage implements OnInit{
  acronyms: Acronym[] = [];

  constructor(
    private popoverCtrl: PopoverController,
    private toastCtrl: ToastController,
    private acronymService: AcronymService) {
  }

  ngOnInit() {
    this.getAcronymsList();
  }

  presentSortPopover(myEvent) {
    let popover = this.popoverCtrl.create(SortPopoverPage);
    popover.present({
      ev: myEvent,
    });
    popover.onDidDismiss((sort) => this.sortData(sort));
  }

  sortData(sort: string) {
    switch (sort) {
      case 'Ascending':
        console.log('Ascending sort chosen');
        break;
      case 'Descending':
        console.log('Descending sort chosen');
        break;
      case 'A-I':
        console.log('Show A-I');
        break;
      case 'J-R':
        console.log('Show J-R');
        break;
      case 'S-Z':
        console.log('Show S-Z');
        break;
      case 'Show All':
        console.log('Show All acronyms');
        break;
      default:
        console.log('Do nothing, popover dismissed by backdrop clicked');
    }
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
      duration: 4000,
      showCloseButton: true
    });
    toast.present();
  }
}
