import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'page-sort-popover',
  template: `
    <ion-list>
      <ion-list-header>Sort Acronyms</ion-list-header>
      <button 
        *ngFor="let sortOption of sortOptions" 
        ion-item 
        (click)="onSortClick(sortOption)">{{ sortOption }}</button>
    </ion-list>
  `
})
export class SortPopoverPage {
  sortOptions = [ 'Ascending', 'Descending' ];

  constructor(public viewCtrl: ViewController) {
  }

  onSortClick(sortType: string) {
    this.viewCtrl.dismiss(sortType);
  }

}
