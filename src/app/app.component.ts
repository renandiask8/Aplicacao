import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder', icon: 'Home' },
    { title: 'Usuários', url: '/usuarios', icon: 'people' },
    { title: 'Controle de Tênis', url: '/placar', icon: 'tennisball' },
    { title: 'Sobre', url: 'sobre', icon: 'information-circle' },
    { title: 'Sair', url: 'agradecimento', icon: 'log-out' },

  ];

}
