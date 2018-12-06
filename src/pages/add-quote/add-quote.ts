import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface'
import { NgForm } from '@angular/forms';
import { LibraryQuotesService } from '../../services/libraryQuotes';

/**
 * Generated class for the AddQuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-quote',
  templateUrl: 'add-quote.html',
})
export class AddQuotePage implements OnInit {
  qCollection: { category: string, quotes: Quote[], icon: string};

  constructor(public navCtrl: NavController, public navParams: NavParams, private libraryQuoteService: LibraryQuotesService) {
  }

  ngOnInit(){
    this.qCollection = this.navParams.data;
    console.log(this.qCollection);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddQuotePage');
  }

  onAddQuote(f:NgForm){
    this.libraryQuoteService.addNewQuote(this.qCollection.category, f.value.quoteText,f.value.author);
    this.navCtrl.popToRoot();
  }

}
