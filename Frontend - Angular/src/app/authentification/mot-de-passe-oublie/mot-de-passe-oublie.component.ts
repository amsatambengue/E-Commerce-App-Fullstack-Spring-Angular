import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Utilisateur } from 'src/app/model/Utilisateur';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-mot-de-passe-oublie',
  templateUrl: './mot-de-passe-oublie.component.html',
  styleUrls: ['./mot-de-passe-oublie.component.css']
})
export class MotDePasseOublieComponent implements OnInit {
  
  email: string;
  motDePasse: string;
  connexionValide;
  authentifiantsInvalides = false; //utilisé uniquement par le formulaire
  motDePasseBis : string;
  emailExiste=false;
  motsDePasseConformes;
  utilisateur: Utilisateur;


  // Variables pour fichier HTML
  txtTitre = this.authentificationService.ComponentMotDePasseOublieTitre;
  txtBouton = this.authentificationService.ComponentMotDePasseOublieBouton;
  pageLogin = this.authentificationService.ComponentConnexionpageLogin;
  txtMotDePasseNonConformes;
  txtEmail = "Email du compte préexistant";
  txtMotDePasse = "Nouveau Mot de Passe";
  txtMotDePasseBis = "Confirmer Mot de Passe";
  txtOubli = this.authentificationService.ComponentConnexionOubli;
  txtQuestion1 = this.authentificationService.ComponentConnexionQuestion;
  txtSolution1 = this.authentificationService.ComponentConnexionSolution;
  txtQuestion2 = this.authentificationService.ComponentInscriptionQuestion;
  txtSolution2 = this.authentificationService.ComponentInscriptionSolution;
  txtIdentifiantsIncorrects = this.authentificationService.ComponentConnexionIdentifiantsIncorrects;
  // Variables pour fichier HTML
  constructor(
    private authentificationService: AuthentificationService,
    private utilsService : UtilsService,

  ) { 
    utilsService.loadScripts(utilsService.authentificationComponentScripts);

  }

  ngOnInit(): void {
  }

}
