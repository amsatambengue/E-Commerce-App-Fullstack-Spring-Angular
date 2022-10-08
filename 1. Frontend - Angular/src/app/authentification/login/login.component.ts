import { GetTemplateDirective } from './../../app.component';
import { AuthentificationService } from './../../services/authentification.service';
import { UtilsService } from './../../services/utils.service';

import { Component, OnInit, ElementRef, ViewChild, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 
export class LoginComponent implements OnInit {
  email : string;
  motDePasse : string;
  connexionValide;
  authentifiantsInvalides = false; //utilisé uniquement par le formulaire

  constructor(
    private utilsService : UtilsService,
    private authentificationService : AuthentificationService,
    private router : Router,
    private http : HttpClient
    )
  {
    // utilsService.loadScripts(utilsService.appComponentScripts);
    
    
  }

  ngOnInit(): void {
    
  }

  //Pour scrolling du login modal
  @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky = true;
  elementPosition: any;

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.elementPosition){
      this.sticky = true;
    } else {
      this.sticky = false;
      this.utilsService.moveFormOutOfView();
    }
  }

//Pour scrolling du login modal

    // Variables pour fichier HTML
    txtTitre = this.authentificationService.ComponentConnexionTitre; 
    txtBouton = this.authentificationService.ComponentConnexionBouton;
    pageLogin= this.authentificationService.ComponentConnexionpageLogin;

    txtEmail= this.authentificationService.ComponentConnexionEmail;
    txtMotDePasse = this.authentificationService.ComponentConnexionMotDePasse;
    txtOubli = this.authentificationService.ComponentConnexionOubli;
    txtQuestion = this.authentificationService.ComponentConnexionQuestion;
    txtSolution = this.authentificationService.ComponentConnexionSolution;
    txtIdentifiantsIncorrects= this.authentificationService.ComponentConnexionIdentifiantsIncorrects;
    // Variables pour fichier HTML


  // changerFormulaireLogin(){
  //   this.authentificationService.changerFormulaireLogin();
  //   localStorage.setItem("estUnFormulaireLogin","false");
  //   console.log("changerFormulaireLogin() LOGIN :");
  // }

  authentification(){
    console.log("TENTATIVE AUTHENTIFICATION ...");
    let resp = this.authentificationService.authentifier(this.email, this.motDePasse);
    resp.subscribe(
      data => {
        // this.router.navigate(["/compte"]);
        this.router.navigateByUrl("/compte");
        this.connexionValide = true;
        console.log("AUTHENTIFICATION REUSSIE");
        document.getElementById("popup-1").classList.toggle("active");
        // document.getElementById("inputEmail").nodeValue="";
    },
    error => {
      console.log("... EREUR D'AUTHENTIFICATION");
      this.connexionValide = false;
      this.authentifiantsInvalides = !this.connexionValide;
      console.log("CONNEXION VALIDE:"+this.connexionValide);
      
    }
    )
  }

  facebookLogin(){

    this.authentificationService.logout();
    window.location.href = this.utilsService.urlServeurBackend+"/facebook-login";
  }

  googleLogin(){
    
    this.authentificationService.logout();
    window.location.href = this.utilsService.urlServeurBackend+"/google-login";  
  }

  moveForm(){
    this.utilsService.moveForm();
  }

  pageMotDePasseOublie(){
    window.location.href = this.utilsService.urlServeurFrontend+"/mot-de-passe-oublie";
  }
  

}
