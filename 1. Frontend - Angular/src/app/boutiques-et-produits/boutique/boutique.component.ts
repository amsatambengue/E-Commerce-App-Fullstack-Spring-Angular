import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/Produit';
import { BoutiqueService } from 'src/app/services/boutique.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
  url : string;
  nomBoutiqueDansURL : string;
  // produits: Produit[];
  
  constructor(
    private boutiqueService : BoutiqueService,
    private router : Router
  ) {
        // this.reloadData();
        this.url = this.router.url;
        this.nomBoutiqueDansURL = this.url.substring(this.url.indexOf("/")+1, this.url.length);
   }

  ngOnInit(): void {
    // this.reloadData();
  }

  // reloadData() {
  //   this.getProduits(this.nomBoutiqueDansURL).subscribe(produits => {
  //     this.produits = produits as Produit[];
  //   });
  //   // console.log(this.nomBoutiqueDansURL); 
  //   console.log(this.produits);
    
  // }


  // getProduits(nomBoutique : string) {
  //   return this.boutiqueService.getProduits(nomBoutique);
  // }

}
