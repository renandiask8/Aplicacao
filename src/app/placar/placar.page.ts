import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placar',
  templateUrl: './placar.page.html',
  styleUrls: ['./placar.page.scss'],
})
export class PlacarPage {
  // Atributos para armazenar informações da partida
  player1Points: number = 0;
  player2Points: number = 0;

  player1Games: number = 0;
  player2Games: number = 0;

  player1Sets: number = 0;
  player2Sets: number = 0;

  starter: string = 'player1';
  gameStarted: boolean = false;
  currentServer: string = 'player1';
  gameLog: string[] = [];

  player1Name: string = '';
  player2Name: string = '';

  player1Photo: string | null = null;
  player2Photo: string | null = null;

  // Métodos para lidar com as ações do jogo
  onFileChange(event: any, player: string) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (player === 'player1') {
          this.player1Photo = reader.result as string;
        } else {
          this.player2Photo = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }
  constructor(private router: Router) {}

  startGame() {
    this.gameStarted = true;
    this.currentServer = this.starter;
    this.gameLog = []; // Reinicia o log da partida
  }

  addPoint(player: string) {
    if (player === 'player1') {
      this.player1Points++;
      this.gameLog.push(`${this.player1Name} marcou um ponto.`);
    } else {
      this.player2Points++;
      this.gameLog.push(`${this.player2Name} marcou um ponto.`);
    }
    this.checkGame();
  }


  checkGame() {
    if (this.player1Points >= 4 && this.player1Points - this.player2Points >= 2) {
      this.player1Games++;
      this.resetPoints();
      this.checkSet();
    } else if (this.player2Points >= 4 && this.player2Points - this.player1Points >= 2) {
      this.player2Games++;
      this.resetPoints();
      this.checkSet();
    }
  }

  checkSet() {
    if (this.player1Games >= 5 && this.player1Games - this.player2Games >= 2) {
      this.player1Sets++;
      this.resetGames();
      this.checkVictory();
    } else if (this.player2Games >= 5 && this.player2Games - this.player1Games >= 2) {
      this.player2Sets++;
      this.resetGames();
      this.checkVictory();
    }
  }

  checkVictory() {
    if (this.player1Sets >= 2) {
      alert(`${this.player1Name} venceu a partida!`);
      this.router.navigate(['folder']);
    } else if (this.player2Sets >= 2) {
      alert(`${this.player2Name} venceu a partida!`);
      this.router.navigate(['folder']);
    }
  }

  resetPoints() {
    this.player1Points = 0;
    this.player2Points = 0;
  }

  resetGames() {
    this.player1Games = 0;
    this.player2Games = 0;
  }

  resetMatch() {
    this.resetPoints();
    this.resetGames();
    this.player1Sets = 0;
    this.player2Sets = 0;
    this.gameStarted = false; // Encerra a partida
  }

  getScore(points: number): string {
    switch (points) {
      case 0:
        return '0';
      case 1:
        return '15';
      case 2:
        return '30';
      case 3:
        return '40';
      default:
        return 'Ad'; // Para vantagem
    }
  }
}
