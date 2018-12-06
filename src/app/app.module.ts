import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavoritePage } from '../pages/favorite/favorite';
import { LibraryPage } from '../pages/library/library';
import { TabsPage } from '../pages/tabs/tabs';
import { QuotesPage } from '../pages/quotes/quotes';
import { QuotesService } from '../services/quotes';
import { SettingsService } from '../services/settings';
import { CheckquotePage } from '../pages/checkquote/checkquote';
import { SettingsPage } from '../pages/settings/settings';
import { AddQuotePage } from '../pages/add-quote/add-quote';
import { LibraryQuotesService } from '../services/libraryQuotes';
import { SkripsiPage } from '../pages/skripsi/skripsi';
import { SkripsicheckPage } from '../pages/skripsicheck/skripsicheck';
import { AuthService } from '../services/AuthService';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FavoritePage,
    LibraryPage,
    QuotesPage,
    CheckquotePage,
    SettingsPage,
    AddQuotePage,
    SkripsiPage,
    SkripsicheckPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FavoritePage,
    LibraryPage,
    QuotesPage,
    CheckquotePage,
    SettingsPage,
    AddQuotePage,
    SkripsiPage,
    SkripsicheckPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService,
    SettingsService,
    LibraryQuotesService,
    AuthService
  ]
})
export class AppModule {}
