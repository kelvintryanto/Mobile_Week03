import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
// import { SkripsicheckPage } from '../skripsicheck/skripsicheck';

/**
 * Generated class for the SkripsiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skripsi',
  templateUrl: 'skripsi.html',
})
export class SkripsiPage implements OnInit{
  skripsiForm: FormGroup;
  pembimbingTemp: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkripsiPage');
  }

  ngOnInit(){
    this.pembimbingTemp.push(new FormControl(null, Validators.required));
    this.initializeForm();
  }

  private initializeForm(){
    this.skripsiForm = new FormGroup({
      nama: new FormControl(null, Validators.required),
      nim: new FormControl(null, Validators.required),
      judul: new FormControl(null, Validators.required),
      classof: new FormControl("2014", Validators.required),
      pembimbing: new FormArray(this.pembimbingTemp),
      lintasProdi: new FormControl(false)
    });
  }

  onTambahPembimbing(){
    this.pembimbingTemp.push(new FormControl(null));
    this.initializeForm();
  }
  
  onAddSkripsi(){
    // let modal = this.modalCtrl.create(SkripsicheckPage, {skripsiValue: this.skripsiForm.value});
    // this.initializeForm();
    console.log(this.skripsiForm.value);
    // modal.present();
  }
}