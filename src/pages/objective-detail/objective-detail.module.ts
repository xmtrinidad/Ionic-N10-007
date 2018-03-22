import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObjectiveDetailPage } from './objective-detail';

@NgModule({
  declarations: [
    ObjectiveDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ObjectiveDetailPage),
  ],
})
export class ObjectiveDetailPageModule {}
