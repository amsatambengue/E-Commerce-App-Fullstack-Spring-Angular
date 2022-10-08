import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Input() telephone : string ;
  @Input() whatsapp : string;
  //lien de l'item à partager sur les réseaux
  @Input() lien : string;
  @Input() utilisateurActuelEstProprietaire : boolean;
  //modifiabilité de la boutique, chequée dans les input par "diasabled"
  estNonModifiable: boolean; 
  message : string = "Référence: ";

  constructor() {
  
  }

  ngOnInit(): void {
  }

  
  saveContact(){

  }
}
