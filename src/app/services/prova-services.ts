import { Service } from '@angular/core';

@Service()
export class ProvaServices {
    private persone = [
      {nome: 'Mario', cognome: 'Rossi', isOnline: true, colore: 'red'},
      {nome: 'Luigi', cognome: 'Amarena', isOnline: false, colore: 'blue'},
      {nome: 'Giovanni', cognome: 'Kiwi', isOnline: true, colore: 'green'},
      {nome: 'Francesca', cognome: 'Pera', isOnline: false, colore: 'yellow'},
      {nome: 'Anna', cognome: 'Limone', isOnline: true, colore: 'orange'},
      {nome: 'Paolo', cognome: 'Clementino', isOnline: false, colore: 'purple'}
    ];

    getPersone() {
        return this.persone;
    }

    getPersona(index: number) {
        return this.persone[index];
    }
}
