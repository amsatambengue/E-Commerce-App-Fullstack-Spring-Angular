import { UtilsService } from 'src/app/services/utils.service';
import { ShoppingService } from './../../../services/shopping.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Couleur } from 'src/app/model/Couleur';
import { FiltreService } from 'src/app/services/filtre.service';

@Component({
  selector: 'app-filtre-produits',
  templateUrl: './filtre-produits.component.html',
  styleUrls: ['./filtre-produits.component.css']
})
export class FiltreProduitsComponent implements OnInit {
  checkedValue : any;
  paletteCouleurs : Couleur[];

  constructor(
    public utilsService : UtilsService,
    public shoppingService : ShoppingService,
    public filtreService : FiltreService,

    ) {
      // utilsService.loadScripts(utilsService.boutiquesEtProduitsScripts);
      this.filtreService.getPaletteCouleurs().subscribe(
        data => {
          this.paletteCouleurs = data;
          // console.log(this.paletteCouleurs );
        },
        error => console.error(error)
);
     }

  ngOnInit(): void {
    // this.utilsService.loadScripts(this.utilsService.boutiquesEtProduitsScripts);

  }

  onCouleurSelectionne(paletteCouleurs : Couleur[]){
    // console.log("FILTRE PRODUIT - onItemSelectionne()");
    
    this.paletteCouleurs = paletteCouleurs;
    // console.log(this.paletteCouleurs);
  }

  switcher(){
    this.utilsService.loadScripts(this.utilsService.boutiquesEtProduitsScripts);
    this.shoppingService.switcher();
  }


}
