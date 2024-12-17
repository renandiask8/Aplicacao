import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgradecimentoPageRoutingModule } from './agradecimento-routing.module';

import { AgradecimentoPage } from './agradecimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgradecimentoPageRoutingModule
  ],
  declarations: [AgradecimentoPage]
})
export class AgradecimentoPageModule {}
