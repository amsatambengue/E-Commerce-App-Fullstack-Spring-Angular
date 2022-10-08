import { AuthentificationComponent } from './../authentification/authentification.component';
import { AuthentificationService } from './../../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-confirmer-compte',
  templateUrl: './confirmer-compte.component.html',
  styleUrls: ['./confirmer-compte.component.css']
})
export class ConfirmerCompteComponent implements OnInit {
  emailAConfirmer : string;
  constructor(private inscriptionService : InscriptionService) { }

  ngOnInit(): void {
   this.emailAConfirmer = this.inscriptionService.emailAConfirmer;
  }

}
