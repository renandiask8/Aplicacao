import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa o Router

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarios: string = ''; // Usuário inserido no formulário
  senha: string = ''; // Senha inserida no formulário

  // Credenciais válidas
  validUsuario: string = 'admin';
  validSenha: string = '1234';

  constructor(private router: Router) {} // Injeta o Router

  ngOnInit() {}

  login() {
    // Verificar credenciais
    if (this.usuarios === this.validUsuario && this.senha === this.validSenha) {
      console.log('Login realizado com sucesso!');
      alert('Login realizado com sucesso!');
      this.router.navigate(['folder']); // Redireciona para a página 'home'
    } else {
      console.log('Credenciais inválidas');
      alert('Usuário ou senha incorretos.');
    }
  }
}
