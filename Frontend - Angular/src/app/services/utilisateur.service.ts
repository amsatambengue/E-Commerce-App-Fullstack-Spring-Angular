import { UtilsService } from './utils.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  utilisateur: Utilisateur = new Utilisateur("","");
  private urlUtilisateurs: string;
  emailUtilisateurCourant : string = localStorage.getItem("email")
  emailEndPointUrl : string = this.utilsService.apiUtilisateurs+'/'+this.emailUtilisateurCourant;
 
  constructor(
    private http: HttpClient,
    private utilsService: UtilsService
    ) 
    {
      this.urlUtilisateurs = this.utilsService.urlServeurBackend+'/utilisateurs';    
    }

  public toutLister(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.urlUtilisateurs);
  }

  detailsUtilisateur():Observable<Utilisateur>{
    // console.log("this.emailUtilisateurCourant: "+this.emailUtilisateurCourant);
    
    if (this.emailUtilisateurCourant != null) {
      return this.http.get<Utilisateur>(this.emailEndPointUrl)
    }
    else
      return null;
    
  }


//utilise detailUtilisateur ci dessus
  async detailsUtilisateurCourant(): Promise<Utilisateur>{
    // console.log("AVANT (detailsUtilisateurCourant)");
   await this.detailsUtilisateur()
    .toPromise()
    .then((res) => {
    return res;

    });;
  // console.log("APRES (detailsUtilisateurCourant)");
  
  return this.utilisateur;
  }


  getListeBoutiques(): Observable<any> {
    return this.http.get(`${this.utilsService.apiBoutiques}`);
  }

 
  // public inscrire(utilisateur: Utilisateur) {
    
  //   console.log("POST DONE");
  //   return this.http.post<Utilisateur>(this.urlUtilisateurs, utilisateur);
  // }

  // createStudent(student: object): Observable<object> {  
  //   return this.http.post(`${this.baseUrl}`+'save-student', student);  
  // }  

  
  // inscrire(utilisateur: object): Observable<object> {  
  //   console.log("POST DONE");
  //   return this.http.post(`${this.urlUtilisateurs}`, utilisateur);  
  // }  

  // inscrire(utilisateur: object): Observable<object> {  
  //   console.log("POST DONE");
  //   return this.http.post(`${this.urlUtilisateurs}`, utilisateur);  
  // }  

  
  inscrire(utilisateur: Utilisateur): Observable<Utilisateur> {
    // return this.http.post<Utilisateur>(this.urlUtilisateurs, utilisateur);   
    return this.http.post<Utilisateur>(this.urlUtilisateurs, utilisateur);   
  }

  // create(product): Observable<Product> {
  //   return this.httpClient.post<Product>(this.apiServer + '/products/', JSON.stringify(product), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  }  

