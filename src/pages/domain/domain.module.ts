import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomainPage } from './domain';

@NgModule({
  declarations: [
    DomainPage,
  ],
  imports: [
    IonicPageModule.forChild(DomainPage),
  ],
})
export class DomainPageModule {}
