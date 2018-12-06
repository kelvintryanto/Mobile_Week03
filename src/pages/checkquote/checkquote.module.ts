import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckquotePage } from './checkquote';

@NgModule({
  declarations: [
    CheckquotePage,
  ],
  imports: [
    IonicPageModule.forChild(CheckquotePage),
  ],
})
export class CheckquotePageModule {}
