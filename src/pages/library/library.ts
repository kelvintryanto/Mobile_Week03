import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesPage } from '../quotes/quotes';
import { LibraryQuotesService } from '../../services/libraryQuotes';

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollection: { category: string, quotes: Quote[], icon: string}[] ;
  quotesPage = QuotesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private libraryQuoteService: LibraryQuotesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  } 

  ngOnInit(){
    this.quoteCollection = this.libraryQuoteService.getAllQuotes();
    console.log(this.quoteCollection);
  }
}
