import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DomainPage } from '../pages/domain/domain';

import { HomeHeaderComponent } from '../pages/home/home-header/home-header';
import { DomainsComponent } from '../pages/home/domains/domains';
import { DomainService } from '../services/domain.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DomainPage,
    HomeHeaderComponent,
    DomainsComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DomainPage,
    HomeHeaderComponent,
    DomainsComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DomainService
  ]
})
export class AppModule {}
