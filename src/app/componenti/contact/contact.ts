import { Component, OnInit } from '@angular/core';
import { ProvaServices } from '../../services/prova-services';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact implements OnInit {
  
  constructor(private serviceProva: ProvaServices) {}
  
  ngOnInit(): void {
    
  }

}
