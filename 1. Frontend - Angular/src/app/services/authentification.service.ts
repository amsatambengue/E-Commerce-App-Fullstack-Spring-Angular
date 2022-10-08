import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { MenuComponent } from './../menu/menu.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  // Variables pour fichier HTML ComponentMotDePasseOublie
  ComponentMotDePasseOublieTitre = "Réinitialiser Mot de Passe";
  ComponentMotDePasseOublieBouton = "Réinitialiser";
  // Variables pour fichier HTML ComponentMotDePasseOublie


  // Variables pour fichier HTML ComponentConnexion
      ComponentConnexionTitre = "Se connecter avec";
      ComponentConnexionBouton = "Se connecter";
      ComponentConnexionpageLogin= true;
  
      ComponentConnexionEmail="Email";
      ComponentConnexionMotDePasse = "Mot de Passe";
      ComponentConnexionOubli = "Oublié?";
      ComponentConnexionQuestion = "Pas de Compte?"
      ComponentConnexionSolution = "Inscrivez-vous maintenant!";
      ComponentConnexionIdentifiantsIncorrects="Login ou Mot de Passe Incorrect";
  // Variables pour fichier HTML ComponentConnexion

  // Variables pour fichier HTML ComponentInscription
    ComponentInscriptionTitre = "S'inscrire avec";
    ComponentInscriptionBouton = "S'inscrire";
    ComponentInscriptionpageLogin= true;
    ComponentInscriptionEmail="Email";
    
    ComponentInscriptionMotDePasse = "Mot de Passe";
    ComponentInscriptionOubli = "";
    ComponentInscriptionQuestion = "Déjà Membre?"
    ComponentInscriptionSolution = "Connectez-vous maintenant!";
    ComponentInscriptionEmailExistant="Email déjà associé à un compte";

  // Variables pour fichier HTML ComponentInscription
   

  constructor(
    private http : HttpClient,
    private router : Router,
    private utilsService : UtilsService
    ) {
      // console.log("CONSTRUCTEUR AUTHENTIFICATION SERVICE :");
      // console.log(localStorage.getItem("estUnFormulaireLogin"));
     }
/**
 * AUTHENTIFICATION
 * @param email 
 * @param motDePasse 
 */
  public authentifier(email, motDePasse){
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(email + ":" + motDePasse)});
      return this.http.get(this.utilsService.urlServeurBackend+"/connexion",{headers, responseType: 'text'}).pipe(
        map(
          donneesUtilisateur => {
            let authString = 'Basic ' + btoa(email + ':' + motDePasse);
            // sessionStorage.setItem('email',email);
            // sessionStorage.setItem('basicAuth', authString);
            localStorage.setItem('email',email);
            localStorage.setItem('basicAuth', authString);

              return donneesUtilisateur;
          }
        )
      ); 
  }

  estConnecte(){
    let emailUtilisateur = localStorage.getItem('email');
      return !(emailUtilisateur === null)
  }

  changerFormulaireLogin(){

    console.log("changerFormulaireLogin() AUTHENTIFICATION SERVICE :");

  }

  logout(){
    // sessionStorage.removeItem('email');
    // sessionStorage.removeItem('basicAuth');
    // localStorage.removeItem('email');
    // localStorage.removeItem('basicAuth');
    localStorage.clear();
    sessionStorage.clear();
    console.log("DECONNEXION ...");
    // console.log(this.estConnecte());

    // window.location.href = this.utilsService.urlServeurBackend+"/logout";
    // this.router.navigate();
    window.location.reload();
    
    return this.estConnecte();
  }
  /**
   * CONNEXION
   */

  facebookLogin(){

    // this.authentificationService.faceBookLogin().subscribe();
    // this.router.url("http://localhost:8080/connexion");
    window.location.href = this.utilsService.urlServeurBackend+"/facebook-login";
    // console.log("Navigatiion vers : localhost:8080");
    
  }

  googleLogin(){
    window.location.href = this.utilsService.urlServeurBackend+"/google-login";
    // console.log("Navigatiion vers : localhost:8080");
    
  }
}
