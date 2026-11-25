import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  
  protected readonly title = signal('corso_angular');

  persone = [{}]
  persone1 = [
      {nome: 'Mario', cognome: 'Rossi', isOnline: true, colore: 'red'},
      {nome: 'Luigi', cognome: 'Amarena', isOnline: false, colore: 'blue'},
      {nome: 'Giovanni', cognome: 'Kiwi', isOnline: true, colore: 'green'},
      {nome: 'Francesca', cognome: 'Pera', isOnline: false, colore: 'yellow'},
      {nome: 'Anna', cognome: 'Limone', isOnline: true, colore: 'orange'},
      {nome: 'Paolo', cognome: 'Clementino', isOnline: false, colore: 'purple'}
    ];
    persone2 = [
      {nome: 'Aldo', cognome: 'Pomodoro', isOnline: true, colore: 'pink'},
      {nome: 'Stella', cognome: 'Cetriolo', isOnline: false, colore: 'beige'},
      {nome: 'Marika', cognome: 'Carciofo', isOnline: true, colore: 'black'},
      {nome: 'Elena', cognome: 'Spinaci', isOnline: false, colore: 'darkred'}
    ];

    ngOnInit(): void {
      this.persone = this.persone1;
}

  onClick() {
    this.persone = this.persone2;
  }

  onRestore() {
    this.persone = this.persone1;
  }
  retriveMessaggio(value: string) {
    console.log("messaggio ricevuto:" + value);
  }
}
