import { ProduitService } from './../../../services/produit.service';
import { Produit } from './../../../model/Produit';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { Boutique } from 'src/app/model/Boutique';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  @Input() nomBoutique: string;
  produits: Produit[];
  @Output() triEventEmmitter = new EventEmitter();

  boutiques: Boutique[];
  triSelectionne: string = "triSelectionne";

  constructor(
    private shoppingService: ShoppingService,
    private produitService: ProduitService,
    private boutiqueService: BoutiqueService
  ) {
      this.produitService.getListeProduits()
      .subscribe(produits => {
        this.produits = produits as Produit[];
      })
  }

  ngOnInit(): void {
    this.shoppingService.switch = false;
  }

  ngOnChanges() {
    this.reloadData();   
  }

  onTriSelectionne(tri: any) {
    this.triSelectionne = tri;

  }

  reloadData() {
    this.produitService.getListeProduitsBoutique(this.nomBoutique)
      .subscribe(produits => {
        this.produits = produits as Produit[];
      })
  }

  getProduits(nomBoutique: string) {
    return this.boutiqueService.getProduits(nomBoutique);
  }

}

