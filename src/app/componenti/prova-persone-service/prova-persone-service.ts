import { Component, OnInit } from '@angular/core';
import { ProvaServices } from '../../services/prova-services';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-prova-persone-service',
  styleUrl: './prova-persone-service.css',
  templateUrl: './prova-persone-service.html',
})
export class ProvaPersoneService implements OnInit {
  persone : any;

  constructor(
    private services: ProvaServices
  ) {
  }

  ngOnInit(): void {
    this.persone = this.services.getPersone();
  }

}
