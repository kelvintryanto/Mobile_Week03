import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SkripsicheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skripsicheck',
  templateUrl: 'skripsicheck.html',
})
export class SkripsicheckPage {
  skripsi:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ngOnInit(){
    this.skripsi = this.navParams.get('skripsiValue');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SkripsicheckPage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }
}
