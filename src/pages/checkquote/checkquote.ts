import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';

/**
 * Generated class for the CheckquotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkquote',
  templateUrl: 'checkquote.html',
})
export class CheckquotePage implements OnInit{
  // quoteCheck: {id: string, text: string, person: string}[];
  quoteCheck: any;

  constructor(public navCtr3l: NavController, public navParams: NavParams, public viewCtrl: ViewController, private quotesService: QuotesService) {
    // this.quoteCheck = this.navParams.data;
    // console.log('json', navParams.get('favoriteQuote'))
  }

  ngOnInit(){
    // console.log(this.navParams.get('favoriteQuote'))
    
    // console.log(this.quoteCheck);
    // this.quoteCheck = this.navParams.data;
    this.quoteCheck = this.navParams.get('favoriteQuote');
    console.log(this.quoteCheck);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckquotePage');
    // console.log("ini quotecheck dikirim dari favorite : ");
    console.log(this.quoteCheck);
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  onDeleteQuote(quote){
    this.quotesService.removeQuoteFromFavorites(quote);
    this.closeModal();
  }

}
