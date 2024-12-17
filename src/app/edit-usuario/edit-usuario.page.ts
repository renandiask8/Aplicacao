import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.page.html',
  styleUrls: ['./edit-usuario.page.scss'],
})
export class EditUsuarioPage implements OnInit {
  usuario: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const index = +this.route.snapshot.paramMap.get('index')!;
    const usuarios = [
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

    this.usuario = { ...usuarios[index] }; // Clona o objeto para edição
  }

  saveUsuario() {
    alert('Usuário atualizado com sucesso!');
    this.router.navigate(['/usuarios']);
  }
}
