import { AuthentificationService } from './../services/authentification.service';
import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public authentificationService : AuthentificationService,
    public router : Router
    ){
  }

  canActivate(): boolean{
    if (!this.authentificationService.estConnecte()) {
      this.router.navigate(['authentification/inscription']);
      return false;
    } 
      return true;
   
  }
}