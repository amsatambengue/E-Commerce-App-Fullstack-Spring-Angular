import { ProduitService } from './../../../services/produit.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Boutique } from 'src/app/model/Boutique';
import { UtilsService } from 'src/app/services/utils.service';
import { UploadFichierService } from 'src/app/services/upload-fichier.service';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { BoutiqueService } from 'src/app/services/boutique.service';

@Component({
  selector: 'app-details-boutique',
  templateUrl: './details-boutique.component.html',
  styleUrls: ['./details-boutique.component.css']
})
export class DetailsBoutiqueComponent implements OnInit {

  boutique: Boutique = new Boutique();
  //url récupéré dans la barre d'adresse
  url: string;
  // lien complet vers la boutique (en cas de partage dans les réseaux)
  lienBoutique;
  utilisateurActuelEstProprietaire: boolean;
  //modifiabilité de la boutique, chequée dans les input par "diasabled"
  estNonModifiable: boolean = true;


  constructor(
    private router: Router,
    private http: HttpClient,
    private produitService: ProduitService,
    private utilsService: UtilsService,
    private uploadFichierService: UploadFichierService,
    private authentificationService: AuthentificationService,
    private boutiqueService : BoutiqueService
  ) {
    this.url = this.router.url;
    this.lienBoutique = this.utilsService.urlServeurFrontend+this.url;
    
    this.produitService.nomBoutiqueDansURL = this.url.substring(this.url.indexOf("/") + 1, this.url.length);

    // this.produitService.listeProduits = this.getListeProduitsBoutique();
    this.getDetailsBoutique();
  }

  ngOnInit(): void {
    // change le nom du site en nom de la boutique affichée
    this.utilsService.nomSiteWeb = this.produitService.nomBoutiqueDansURL;

    this.reloadData();
  }

  reloadData() {
    // this.utilsService.loadScripts(this.utilsService.boutiquesEtProduitsScripts);
    this.produitService.produits = this.produitService.getListeProduitsBoutique(this.produitService.nomBoutiqueDansURL);
  }

  getListeProduitsBoutique() {
    return this.produitService.getListeProduitsBoutique(this.produitService.nomBoutiqueDansURL);
  }

  getDetailsBoutique() {
    return this.http.get<Boutique>(this.utilsService.apiBoutiques + "/" + this.produitService.nomBoutiqueDansURL)
      .subscribe(data => {
        this.boutique = data;

        this.utilisateurActuelEstProprietaire = this.verifPropreteBoutique();

        if (this.utilisateurActuelEstProprietaire) {
          this.permettreModificationBoutique();
          // this.uploadFichierService.idProduit = this.idProduit;
          // this.uploadFichierService.nomBoutique = this.nomBoutique;
          // this.uploadFichierService.idUtilisateur = this.produit.utilisateur.id;
        }


      })
  }

  modifNomBoutique(){
    this.saveBoutique();
    // redirection vers le nouvel url de la boutique changée
    window.location.replace("/"+this.boutique.nom);
  }

  saveBoutique() {
    console.log("SAUVEGARDE BOUTIQUE: ");
    console.log("this.boutique.id: "+this.boutique.id);
    console.log(this.boutique)
    this.boutiqueService.saveBoutique(this.boutique).subscribe();

  }

  deleteProduit(id: number) {
    this.produitService.deleteProduit(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  modification(boutique: Boutique) {
    //permet de savoir s'il s'agit d'un ajout ou d'une modification
    this.uploadFichierService.estUneTentativeDeModification = true;
    this.uploadFichierService.boutique = boutique;
    this.uploadFichierService.idUtilisateur = boutique.utilisateur.id;
    this.uploadFichierService.nomBoutique = boutique.nom;
    

  }

  permettreModificationBoutique() {
    document.getElementById("nomBoutique").classList.add("editable");
    document.getElementById("sloganBoutique").classList.add("editable");
    document.getElementById("descriptionBoutique").classList.add("editable");

    this.estNonModifiable = false;
  }

  verifPropreteBoutique(): boolean {
    // Si il y a un tilisateur connecté
    if (this.authentificationService.estConnecte()) {
      return this.boutique?.utilisateur?.email === localStorage.getItem('email');
    } else {
      return false;
    }

  }

  supprimerLogo(idLogo : number){

    this.uploadFichierService.nomBoutique = this.boutique.nom;
    this.uploadFichierService.idUtilisateur = this.boutique.utilisateur.id;

    this.uploadFichierService.remplacerLogo(idLogo)
    .subscribe(
      data => {
        console.log(data);
        // this.reloadData();
        window.location.reload();
      },
      error => console.error(error)
      
    );

  
  }

}