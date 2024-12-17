import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {
  nome: string = '';
  senha: number | string = '';
  dataNascimento: string = '';
  altura: number | string = '';
  sexo: string = '';
  maoDominante: string = '';
  peso: number | string = '';

  constructor(private router: Router) {}

  ngOnInit() {}


  Usuario() {
    this.router.navigate(['usuarios']);
  }


  cadastrar() {

    if (this.nome && this.dataNascimento && this.sexo && this.peso && this.altura && this.maoDominante) {

      alert('Usuário cadastrado com sucesso!');

    } else {
      alert('Por favor, preencha todos os campos antes de cadastrar.');
    }
  }


  limparCampos() {
    this.nome = '';
    this.senha = '';
    this.dataNascimento = '';
    this.sexo = '';
    this.altura = '';
    this.peso = '';
    this.maoDominante = '';
  }
}
