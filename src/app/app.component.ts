import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { LibraryQuotesService } from '../services/libraryQuotes';
import { SkripsiPage } from '../pages/skripsi/skripsi';
import { AuthService } from '../services/AuthService';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  tabsPage:any = SkripsiPage;
  settingsPage:any = SettingsPage;

  @ViewChild('sideMenuContent') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, private libraryQuoteService: LibraryQuotesService, private authService: AuthService) {
    this.libraryQuoteService.initializeAllQuotes();
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp({
      apiKey: "AIzaSyATSj0PoaezdgxpgHbc5xO7UDnMKp-Vmb4",
      authDomain: "ionic-firebase-e23e2.firebaseapp.com",
    });

    firebase.auth().onAuthStateChanged(user => {
      this.authService.signin('kelvin.tryanto@gmail.com', '12345678');
  
      if(user) {
         //do something here if the user is logged in
         console.log("i'm logged in")
      }
      else {
         //do something here if the user is not logged in
         console.log("you're not logged in")
      }
    });
  }

  onLoad(page:any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  
}

