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
  acronyms: Acronym[];
  sort = 'Ascending';

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

  sortData(sortSelected: string) {
    // Do nothing if same sort
    if (sortSelected === this.sort || sortSelected === null) return;
    this.sort = sortSelected;
    this.acronyms.sort((a, b) => {
      // Sort ascending
      if (sortSelected === 'Ascending') {
        return a.acronym.localeCompare(b.acronym);
      } else {
        return b.acronym.localeCompare(a.acronym);
      }
    });
  }

  /**
   * Convert acronym list txt file to object and push
   * onto acronyms
   */
  getAcronymsList() {
    this.acronymService.getAcronyms()
      .subscribe((data: any) => {
        this.acronyms = data;
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
