import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Couleur } from 'src/app/model/Couleur';
import { InstanceCouleur } from 'src/app/model/InstanceCouleur';
import { PaletteCouleursService } from 'src/app/services/palette-couleurs.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-palette-couleurs',
  templateUrl: './palette-couleurs.component.html',
  styleUrls: ['./palette-couleurs.component.css']
})
export class PaletteCouleursComponent implements OnInit {

  @Input() desactive: boolean;
  @Input() utilisateurEstProprietaire: boolean;
  @Input() paletteCouleurs : Couleur[];
  @Output() couleurEventEmmitter = new EventEmitter();


  constructor(
                private paletteCouleursService : PaletteCouleursService,
                public produitService : ProduitService
              ) 
  {    

    // this.paletteCouleursService.getListeCouleurs().subscribe(data => {
    //   this.paletteCouleurs = data;
    //   console.log("PALETTES----------------------------------------------------");
    //   console.log(this.paletteCouleurs);
    // });
    
    // console.log(this.produitService.produit.instancesCouleur);
    //  this.instancesCouleurs = this.produitService.produit.instancesCouleur;
    //   console.log("INSTANCES COULEUR----------------------------------------------------");
    //   console.log(this.instancesCouleurs);



   }

  ngOnInit(): void {
    
  }
  

  //change le booléen "disponible" se trouvant dans "instanceCouleur"
  // inverserSelection(idInstanceCouleur){
  //   // -1 est utilisé ici parce que la collection venant de ngFor commence par zéro alors qu'un id de base de données commence toujours par 1
  //   return this.paletteCouleurs[idInstanceCouleur-1].disponible = !this.paletteCouleurs[idInstanceCouleur-1].disponible;
    
  // }
  
  onItemSelectionne(event: any){
    console.log("PALETTE - onItemSelectionne()");
    console.log(this.paletteCouleurs);

    // console.log(event);
    this.couleurEventEmmitter.emit(this.paletteCouleurs);

    // this.produitService.produit.instancesCouleur = this.instancesCouleurs;
    // this.produitService.updateProduit(this.produitService.produit).subscribe();

 }
}
