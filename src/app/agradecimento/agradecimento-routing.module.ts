import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgradecimentoPage } from './agradecimento.page';

const routes: Routes = [
  {
    path: '',
    component: AgradecimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgradecimentoPageRoutingModule {}
