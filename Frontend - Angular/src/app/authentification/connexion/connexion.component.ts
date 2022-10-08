import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  email: string;
  motDePasse: string;
  connexionValide;

  authentifiantsInvalides = false; //utilisé uniquement par le formulaire

  // Variables pour fichier HTML
  txtTitre = this.authentificationService.ComponentConnexionTitre;
  txtBouton = this.authentificationService.ComponentConnexionBouton;
  pageLogin = this.authentificationService.ComponentConnexionpageLogin;

  txtEmail = this.authentificationService.ComponentConnexionEmail;
  txtMotDePasse = this.authentificationService.ComponentConnexionMotDePasse;
  txtOubli = this.authentificationService.ComponentConnexionOubli;
  txtQuestion = this.authentificationService.ComponentConnexionQuestion;
  txtSolution = this.authentificationService.ComponentConnexionSolution;
  txtIdentifiantsIncorrects = this.authentificationService.ComponentConnexionIdentifiantsIncorrects;
  // Variables pour fichier HTML

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router,
    private utilsService : UtilsService

  ) {
    utilsService.loadScripts(utilsService.authentificationComponentScripts);

   }

  ngOnInit(): void {
  }





  // changerFormulaireLogin(){
  //   this.authentificationService.changerFormulaireLogin();
  //   localStorage.setItem("estUnFormulaireLogin","false");
  //   console.log("changerFormulaireLogin() LOGIN :");


  // }

  authentification() {
    console.log("TENTATIVE AUTHENTIFICATION ...");
    let resp = this.authentificationService.authentifier(this.email, this.motDePasse);
    resp.subscribe(
      data => {
        this.router.navigate(["/compte"]);
        this.connexionValide = true;
        console.log("AUTHENTIFICATION REUSSIE");

        // Toggle enlevé pour se différencier du login component qui est flottant a la base
        // document.getElementById("popup-1").classList.toggle("active");
        // document.getElementById("inputEmail").nodeValue="";

      },
      error => {
        console.log("... EREUR D'AUTHENTIFICATION");
        this.connexionValide = false;
        this.authentifiantsInvalides = !this.connexionValide;
        console.log("CONNEXION VALIDE:" + this.connexionValide);

      }
    )

  }

  facebookLogin() {
    this.authentificationService.facebookLogin();

  }

  googleLogin() {
    this.authentificationService.googleLogin();
  }
}