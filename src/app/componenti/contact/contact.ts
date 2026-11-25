import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvaServices } from '../../services/prova-services';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact implements OnInit {
  
  persone:any;
  persona:any;
  isProfile:boolean = false;
  
  constructor(private serviceProva: ProvaServices,
              private route:ActivatedRoute

  ) {}
  
  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.isProfile = true;
      this.persona = this.serviceProva.getPersona(parseInt(this.route.snapshot.paramMap.get('id')!));
    } else {
      this.isProfile = false;
      this.persone = this.serviceProva.getPersone();
    }
  }

}
