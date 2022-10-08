import { UtilsService } from './../services/utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  /**
   * URLs  des categories
   */

  // habits = "http://192.168.1.17:8887/Categories/Habits/habits.png";
  habits = this.utilsService.urlServeurFichiers+'/categories/Habits/habits.png';
  accessoires = this.utilsService.urlServeurFichiers+"/Categories/Accessoires/accessoires.png";
  electronique = this.utilsService.urlServeurFichiers+"/Categories/Electronique/electronique.png";
  chaussures = this.utilsService.urlServeurFichiers+"/Categories/Chaussures/chaussures.png";
  sacs = this.utilsService.urlServeurFichiers+"/Categories/Sacs/sacs.png";




  diapo1 : string = this.utilsService.urlServeurFichiers+this.utilsService.maximCollection+"/groupe1.jpg";
  diapo2 : string = this.utilsService.urlServeurFichiers+this.utilsService.maximCollection+"/groupe2.jpg";
  diapo3 : string = this.utilsService.urlServeurFichiers+this.utilsService.maximCollection+"/groupe3.jpg";
  
  

  constructor(
    private utilsService : UtilsService,
    
    ) { 
    // utilsService.loadScripts(utilsService.appComponentScripts);
    

  }

  ngOnInit(): void {
    // Initialisation des diapos de la page d'accueil
    document.getElementById("diapo-1").style.backgroundImage = "url("+this.diapo1+")";
    document.getElementById("diapo-2").style.backgroundImage = "url("+this.diapo2+")";
    document.getElementById("diapo-3").style.backgroundImage = "url("+this.diapo3+")";
    // Initialisation des diapos de la page d'accueil
  }

}
