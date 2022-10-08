import { Utilisateur } from './../../model/Utilisateur';
import { UtilisateurService } from './../../services/utilisateur.service';
import { InscriptionService } from './../../services/inscription.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  email : string;
  motDePasse : string;
  motDePasseBis : string;
  connexionValide;

  emailExiste=false;
  motsDePasseSontConformes;

  utilisateur: Utilisateur;

  authentifiantsInvalides = false; //utilisé uniquement par le formulaire
    // Variables pour fichier HTML
    txtTitre = this.authentificationService.ComponentInscriptionTitre; 
    txtBouton = this.authentificationService.ComponentInscriptionBouton;
    pageLogin= this.authentificationService.ComponentInscriptionpageLogin;

    txtEmail= this.authentificationService.ComponentInscriptionEmail;
    txtMotDePasse = this.authentificationService.ComponentInscriptionMotDePasse;
    txtMotDePasseBis = "Confirmer Mot de Passe";
    txtOubli = this.authentificationService.ComponentInscriptionOubli;
    txtQuestion = this.authentificationService.ComponentInscriptionQuestion;
    txtSolution = this.authentificationService.ComponentInscriptionSolution;
    txtIdentifiantsIncorrects= this.authentificationService.ComponentInscriptionEmailExistant;
    
    txtMotDePasseNonConformes;
    // Variables pour fichier HTML


  constructor(
    private authentificationService : AuthentificationService,
    private inscriptionService : InscriptionService,
    private utilsService : UtilsService,

    private router: Router, 
    private utilisateurService: UtilisateurService,

  ) { 
    utilsService.loadScripts(utilsService.authentificationComponentScripts);

  }

  // changerFormulaireLogin(){
  //   localStorage.setItem("estUnFormulaireLogin","true");

  //   console.log("changerFormulaireLogin() INSCRIPTION :");
  
  // }

  motsDePasseConformes(){
    this.motsDePasseSontConformes = this.motDePasse == this.motDePasseBis;
    if (this.motsDePasseSontConformes) {
      this.txtMotDePasseNonConformes = '';
    }else
      this.txtMotDePasseNonConformes = "Les mot de passe ne sont pas les mêmes";

    return this.motsDePasseSontConformes;
  }

  // emailExiste(){

  // }


  inscription() {
    //Lancer seulement si inscription valide  !!    
    this.inscriptionService.emailAConfirmer = this.email;
    if (this.motsDePasseConformes() && !this.emailExiste) {
        console.log("TENTATIVE D'INSCRIPTION ...");
        this.utilisateur = new Utilisateur(this.email, this.motDePasse);
        this.utilisateurService.inscrire(this.utilisateur).subscribe(
                                                                      utilisateur => 
                                                                                      {
                                                                                        console.log((utilisateur)
                                                                                        );
        });
        this.router.navigateByUrl("authentification/confirmer-compte");
        console.log("INSCRIPTION DONE");
    }
    else
      console.log("PROBLEME EMAIL OU MOT DE PASSE");

  }

  // inscription(): void {
  //   // if (this.motDePasse === this.motDePasseBis) { //et email non existant déjà
  //     console.log("TENTATIVE D'INSCRIPTION ...");
  //     this.utilisateur = new Utilisateur("",this.email,this.motDePasse,true);
  //     this.inscriptionService.inscrire(this.utilisateur)
  //         .subscribe( data => {
  //           alert("Utilisateur créé avec succes.");
  //         });
  //   // }


  // };

  facebookLogin(){
    this.authentificationService.facebookLogin();
    
  }

  googleLogin(){
    this.authentificationService.googleLogin();
  }

  
  ngOnInit(): void {

  }

}
