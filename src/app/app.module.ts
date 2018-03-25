import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DomainPage } from '../pages/domain/domain';
import { ObjectiveDetailPage } from '../pages/objective-detail/objective-detail';
import { ResourcesPage } from '../pages/resources/resources';
import { AcronymsPage } from '../pages/acronyms/acronyms';
import { SortPopoverPage } from '../pages/sort-popover/sort-popover';

import { HomeHeaderComponent } from '../pages/home/home-header/home-header';
import { DomainsComponent } from '../pages/home/domains/domains';
import { DomainService } from '../services/domain.service';
import { ResourceService } from '../services/resource.service';
import { AcronymService } from '../services/acronym.service';





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DomainPage,
    ObjectiveDetailPage,
    HomeHeaderComponent,
    DomainsComponent,
    ResourcesPage,
    AcronymsPage,
    SortPopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DomainPage,
    ObjectiveDetailPage,
    HomeHeaderComponent,
    DomainsComponent,
    ResourcesPage,
    AcronymsPage,
    SortPopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DomainService,
    ResourceService,
    AcronymService
  ]
})
export class AppModule {}
