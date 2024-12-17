import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  // Lista de usuários fictícios
  usuarios = [
    {
      nome: 'João Silva',
      dataNascimento: '1990-01-15',
      sexo: 'Masculino',
      altura: '1.75m',
      peso: '70kg',
      maoDominante: 'Destro',
    },
    {
      nome: 'Maria Souza',
      dataNascimento: '1985-07-22',
      sexo: 'Feminino',
      altura: '1.65m',
      peso: '60kg',
      maoDominante: 'Canhoto',
    },
    {
      nome: 'Carlos Pereira',
      dataNascimento: '2000-03-10',
      sexo: 'Masculino',
      altura: '1.80m',
      peso: '80kg',
      maoDominante: 'Destro',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  // Função para navegar para a página de adicionar um novo usuário
  addUsuarios() {
    this.router.navigate(['add-usuario']);
  }

  // Função para navegar para a página de edição de usuário
  editUsuario(index: number) {
    this.router.navigate(['edit-usuario']);
  }
}
