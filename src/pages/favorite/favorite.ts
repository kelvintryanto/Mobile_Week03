import { Component, OnInit } from '@angular/core';
import { IonicPage, ModalController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { CheckquotePage } from '../checkquote/checkquote';
import { SettingsService } from '../../services/settings';
// import { LibraryQuotesService } from '../../services/libraryQuotes';

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage implements OnInit{
  favoriteCollection: any;

  ngOnInit(){
    this.favoriteCollection=this.quotesService.getFavoriteQuotes();
    // console.log(this.favoriteCollection);
  }

  constructor (private quotesService: QuotesService, private modalCtrl: ModalController, public navParams: NavParams, private settingSvc: SettingsService,
    private alertCtrl:AlertController, private quotes:QuotesService, private toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
    // console.log(this.quotesService.getFavoriteQuotes());
    // console.log(this.navParams.data);
  }

  onReadQuote(quote: Quote){
    this.quotesService.getFavoriteQuotes();
  }

  onDeleteQuote(quote){
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  onFavoriteClick(favoriteQuote){
    // console.log(favoriteQuote)
    let modal = this.modalCtrl.create(CheckquotePage, {favoriteQuote : favoriteQuote});
    modal.present();
  }
  
  setBgColor(){
    return this.settingSvc.isAltBackground() ? 'hijau' : 'yellow';
  }

  addQuotes(){
    const alert = this.alertCtrl.create({
      title: 'Add New Quote',
      inputs: [
        {
          name: 'person',
          placeholder: 'Nama'
        },
        {
          name: 'text',
          placeholder: 'Token'
        }
      ],
      buttons:[
        {
          text: 'OK',
          handler: (data:any) => {
              this.quotes.addQuoteToFavorites(data);
              this.showToast();
              console.log(data);
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

  showToast(){
    let toast = this.toastCtrl.create({
      message: "New quote was added",
      duration: 2000,
      position: "bottom"
    })
    toast.present();
  }
}
