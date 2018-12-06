import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { AddQuotePage } from '../add-quote/add-quote';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteCollection: { category: string, quotes: Quote[], icon: string}[] ;
  addQuotePage = AddQuotePage;

  constructor(private quotesService: QuotesService, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }

  ngOnInit(){
    this.quoteCollection = this.navParams.data;
    console.log(this.quoteCollection);
  }

  addToFavorite(quotes){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure you want to add the quote to favorites?',
      buttons:[
        {
          text: 'OK',
          handler: () => {
              this.quotesService.addQuoteToFavorites(quotes);
          }
        },
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {
            console.log('No is clicked');
          }
        }
      ]
    });
    alert.present();
  }

  onDeleteQuote(quote){
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quotes){
    return this.quotesService.isFavorite(quotes);
  }
}
