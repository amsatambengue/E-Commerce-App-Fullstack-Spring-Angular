import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    public authentificationService : AuthentificationService,
    public router : Router
    ){
  }
    canActivate(): boolean{
      if (this.authentificationService.estConnecte()) {
        this.router.navigate(['']);
        return false;
      } 
        return true;
     
    }
  }
  

