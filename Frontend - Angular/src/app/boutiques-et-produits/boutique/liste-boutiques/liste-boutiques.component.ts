import { BoutiqueService } from './../../../services/boutique.service';
import { UtilsService } from 'src/app/services/utils.service';
import { ShoppingService } from './../../../services/shopping.service';
import { Component, OnInit } from '@angular/core';
import { Boutique } from 'src/app/model/Boutique';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liste-boutiques',
  templateUrl: './liste-boutiques.component.html',
  styleUrls: ['./liste-boutiques.component.css']
})
export class ListeBoutiquesComponent implements OnInit {
  boutiques: Boutique[];

  constructor(
    private shoppingService : ShoppingService,
    private boutiqueService : BoutiqueService,
    private utilsService : UtilsService
  ) {
    // this.utilsService.loadScripts(this.utilsService.boutiquesEtProduitsScripts);        
    // this.getListeBoutiques();
    this.reloadData();
    
   }

  ngOnInit(): void {
    this.shoppingService.switch=true;
  }

  reloadData() {
    this.utilsService.loadScripts(this.utilsService.boutiquesEtProduitsScripts);
      this.boutiqueService.getListeBoutiques().subscribe(boutiques => {
        this.boutiques = boutiques as Boutique[];   
        // console.log("RELOAD DATA IN"); 
        // console.log(this.boutiques);  
  });;
    // console.log("RELOAD DATA OUT");
    // console.log(this.boutiques);  
  }

  getListeBoutiques(){

    return this.boutiqueService.getListeBoutiques();
      
  }

}
