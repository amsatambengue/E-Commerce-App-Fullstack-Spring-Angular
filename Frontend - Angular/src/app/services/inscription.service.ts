import { Utilisateur } from './../model/Utilisateur';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  emailAConfirmer:string;

  constructor(
    private httpClient : HttpClient,
    private utilsService : UtilsService

  ) { }

  public inscrire(utilisateur) {
    return this.httpClient.post<Utilisateur>(this.utilsService.apiUtilisateurs, utilisateur);
  }
}
