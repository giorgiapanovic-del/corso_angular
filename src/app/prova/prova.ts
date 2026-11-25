import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { HighLight } from '../directives/high-light';

@Component({
  imports: [MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, CommonModule, HighLight],
  selector: 'app-prova',
  styleUrl: './prova.css',
  templateUrl: './prova.html',
})

export class Prova implements OnInit, OnChanges{

  @Input() persone:any;
  @Output() mandaDatiEvent = new EventEmitter<string>();
  @ViewChild('inputSaluti') valoreInput!: ElementRef<HTMLInputElement>;

  constructor() {
    console.log('Prova component constructor called');   
  }

  title = 'Corso Angular - Prova'
  daVedere = true;
  isAdmin = false;
  colore = 'red';
  defaultColor = 'yellow';
  oggi = new Date();


  ngOnInit(): void {
    console.log('Prova component initialized');
  }

  cani = [
    {nome: 'Roger', razza: 'labrador', descrizione: 'Cane molto affettuoso e giocherellone.'},
    // {nome: 'Fido', razza: 'barboncino', descrizione: 'Cane molto intelligente e vivace.'},

  ]

  isDisabled = false;

  hoCliccato( e: any) {
    console.log('Hai cliccato il pulsante!' + e );
  }

  onInput(event: Event) {
    //console.log('Input event triggered:', event);
    console.log((<HTMLInputElement>event.target).value);
    }

    numero = 20.3423455;
    coloreOn = 'green';
    coloreOff = 'red';

    ngOnChanges(changes:SimpleChanges): void {
      console.log(changes);

    }
    invioDati() {
      this.mandaDatiEvent.emit("Questo messaggio è stato inviato da prova component");
    }

    seeValue() {
      console.log("valoreInput:" + this.valoreInput.nativeElement.value);
    }
}
