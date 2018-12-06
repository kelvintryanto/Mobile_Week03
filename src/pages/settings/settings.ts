import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle} from 'ionic-angular';
import { SettingsService } from '../../services/settings';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage implements OnInit{
  public alternative: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private settingSvc: SettingsService) {
  }

  ngOnInit(){
    // console.log(this.quoteService.getAlternative());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(toggle: Toggle){
    this.settingSvc.setBackground(toggle.value);
  }

  isChecked(){
    return this.settingSvc.isAltBackground();
  }

}
