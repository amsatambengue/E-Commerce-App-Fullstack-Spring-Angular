import { UtilisateurService } from './../services/utilisateur.service';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './../services/utils.service';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model/Utilisateur';
import { Router } from '@angular/router';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css'],
  

})
export class CompteComponent implements OnInit {
  utilisateur: Utilisateur = new Utilisateur("","");

  constructor(
    private utilsService : UtilsService,
    private http : HttpClient,
    private utilisateursService : UtilisateurService,
    private router : Router
    ) { 
        // utilsService.loadScripts(utilsService.appComponentScripts);
        utilsService.loadScripts(utilsService.compteComponentScripts);

  }
  ngOnChanges(){
    
  }
  ngOnInit(): void {

    this.detailsUtilisateur();
    this.utilsService.loadScripts(this.utilsService.compteComponentScripts);


    // console.log("AVANT");
    //   this.utilisateursService.detailsUtilisateur()
    //   .pipe(
    //     map( response => {
    //     // TODO: Do Your Staff Here! 
    //     this.postData = response;
    //     console.log("DATA"+this.postData.id);
    //   } )
    //   );
    // console.log("APRES");

  }

  async detailsUtilisateur(){
    console.log("AVANT");
   await this.utilisateursService.detailsUtilisateur()
    .toPromise()
    .then((res) => {
      this.utilisateur = res;
      console.log("DATA: "+this.utilisateur.id);
      console.log(this.utilisateur);
    });;
  console.log("APRES");
  
  }

}
