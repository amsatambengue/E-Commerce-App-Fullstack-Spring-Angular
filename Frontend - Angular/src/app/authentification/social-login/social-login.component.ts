import { UtilsService } from './../../services/utils.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit {
  email : string;


  constructor(
    private route: ActivatedRoute,
    private utilsService : UtilsService,

    
    private  authentificationService : AuthentificationService
  ) {
    // utilsService.loadScripts(utilsService.authentificationComponentScripts);

   }

  ngOnInit() {
    this.email = this.route.snapshot.queryParamMap.get("email")
    this.route.queryParamMap.subscribe(queryParams => {
    this.email = queryParams.get("email")
  })
  
    console.log("EMAIL: "+this.email);

    //Modifier de telle sorte a donner juste l'emeil pour connecter le mafacka
    //Et faire en sorte que la deconnection touche aussi la deconnexion sociale
    if (this.email === null) {
      console.log("EMAIL: "+"NON EXISTANT");

    } else {
      console.log("EMAIL: "+this.email);
      sessionStorage.setItem('email',this.email);
    }  
  }

  facebookLogin() {
    this.authentificationService.facebookLogin();

  }

  googleLogin() {
    this.authentificationService.googleLogin();
  }


}
