import { FiltreService } from './../../../services/filtre.service';
import { UploadFichierService } from './../../../services/upload-fichier.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
import { Produit } from 'src/app/model/Produit';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { Couleur } from 'src/app/model/Couleur';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {

  //recupere un string avec des mots séparés par un "-"
  sluggyfied : string;
  //utilisé par les champs "input" pour activer "disabled" ou non
  estNonModifiable : boolean = true;
  utilisateurActuelEstProprietaire: boolean;

  // public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public masquePrix = [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,' ','FCFA']
  // public masquePrix = {
  //   showMask: true,
  //   mask : [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,' ','FCFA']
  // }


  /**
   * PRODUIT
   */
    urlProduit:string;
    produit = new Produit();
    produitSansCouleurs = new Produit();
    idProduit : string;
    //la liste de des couleurs du produit et leur disponibilité (booléen)
    listeCouleurs : Couleur[];
    //lien normalisé du produit
    lienProduit : string;

  /**
   * BOUTIQUE
   */
    //Boutique du produit chargé
    nomBoutique : string;
    //liste des boutiques de l'utilisateur connecté
    boutiques;
    //boutique selectionnée par défaut au niveau du dropdown list <select>
    boutiqueSelectionnee : string;
    //Slogan de la boutique du produit chargé
    sloganBoutique : string = "";

  /**
   * CATEGORIE
   */
    //categorie selectionnée par défaut au niveau du dropdown list <select>
    categorieSelectionnee : string;
    //liste des catégories disponibles sur le site web
    categories;


  constructor(
    private router : Router,
    private produitService : ProduitService,
    private utilsService : UtilsService,
    private boutiqueService : BoutiqueService,
    public uploadFichierService : UploadFichierService,
    private filtreService : FiltreService,
    private authentificationService : AuthentificationService
    ) {
      this.utilsService.loadScripts(this.utilsService.detailsProduitComponentScripts);
      this.urlProduit = this.router.url;
      this.nomBoutique = this.urlProduit.substring(this.urlProduit.indexOf("/")+1, this.urlProduit.lastIndexOf("/"));

      this.idProduit = this.urlProduit.substring(this.urlProduit.lastIndexOf("-")+1, this.urlProduit.length);
      this.getListeIllustrations(this.idProduit);
      this.reloadData();    
   }

  ngOnInit(): void {    
    this.produitDansURL();
    this.produitService.produit = this.produit;
    //changement du nom du site web au nom de la boutique
    this.utilsService.nomSiteWeb = this.nomBoutique;

  }

  onCouleurSelectionne(paletteCouleurs : Couleur[]){
    this.listeCouleurs = paletteCouleurs;   
    this.updateProduit();
  }
  
  onBoutiqueSelectionnee(nomBoutique : any){
    this.boutiqueSelectionnee = nomBoutique;
    console.log("BOUTIQUE AVANT SELECTION: "+this.produit.boutique.nom);
    this.boutiqueService.getBoutiqueByNom(this.boutiqueSelectionnee).subscribe(
                  data => {
                    this.produit.boutique = data;
                    console.log("DATA APRES SELECTION: "+data.nom);
                    console.log("BOUTIQUE APRES SELECTION: "+this.produit.boutique.nom);
                    // console.log("Illustration Produit "+this.produit.illustrations[0].toString());

                    this.saveProduit();

                    //redirige l'utilisateur vers le bon lien correspondant à la nouvelle boutique assignée au produit
                    // par exemple www.fegajaay.com/mamyShop/lunnettes-de-soleil-6
                    //remplacé par www.fegajaay.com/lunaBoutique/lunnettes-de-soleil-6
                    window.location.replace("/"+this.produit.boutique.nom+"/"+"-"+this.produit.id);
                  },
                  error => console.error(error)
      
    );

  }

  onCategorieSelectionnee(nomCategorie : any){
    this.categorieSelectionnee = nomCategorie;
    this.filtreService.getCategorie(this.categorieSelectionnee).subscribe(
                  data => {
                    this.produit.categorie = data;

                    this.saveProduit();
                  },
                  error => console.error(error)
      
    );

  }

  //récupère l'illustration à modifier
  modification(illustration:any){
    //permet de savoir s'il s'agit d'un ajout ou d'une modification
    this.uploadFichierService.estUneTentativeDeModification = true;
    this.uploadFichierService.illustration = illustration;
  }

  //récupère toutee la liste d'illustrations
  ajoutIllustration(listeIllustrations : any){
        //permet de savoir s'il s'agit d'un ajout ou d'une modification
    this.uploadFichierService.estUneTentativeDeModification=false;
    this.uploadFichierService.listeIllustrations = listeIllustrations;
  }

  reloadData() {
    this.utilsService.loadScripts(this.utilsService.boutiquesEtProduitsScripts);

  }

  permettreModificationProduit(){
    document.getElementById("libelleProduit").classList.add("editable");
    document.getElementById("prixProduit").classList.add("editable");
    document.getElementById("descriptionProduit").classList.add("editable");
    
    this.estNonModifiable  = false;
  }

  //récupère toutes données concernant le poduit référencé par l'URL
  async produitDansURL(): Promise<Produit>{
    await this.produitService.getProduit(this.idProduit)
      .toPromise()
      .then((res) => {     
        this.produit = res;
        //la boutique par défaut au niveau de l'élément <select> correspondant
        this.boutiqueSelectionnee = res.boutique.nom.toString();

        //Slogan de la boutique du produit chargé
        this.sloganBoutique = res.boutique.slogan.toString();

        //la categorie par défaut au niveau de l'élément <select> correspondant
        this.categorieSelectionnee = res.categorie.nom.toString();

        
        this.utilisateurActuelEstProprietaire = this.verifPropreteProduit();
        
        if (this.utilisateurActuelEstProprietaire) {
            this.permettreModificationProduit();
            this.uploadFichierService.idProduit = this.idProduit;
            this.uploadFichierService.nomBoutique = this.nomBoutique;
            this.uploadFichierService.idUtilisateur = this.produit.utilisateur.id;

            //liste des categories disponible sur le site web
            this.getListeCategories()          
            .subscribe(
              data => {
                this.categories = data;
              },
              error => console.error(error)
              
            );

            //liste des boutiques de l'utilisateur connecté
            this.getListeBoutiquesUtilisateur(localStorage.getItem("email"))
            .subscribe(
              data => {
                this.boutiques = data;
              },
              error => console.error(error)
              
            );
        }

        //Verification matching boutique appelé sur, le lien et produit appelé sur le lien
        if (res.boutique.nom.toLowerCase() === this.nomBoutique.toLowerCase()) {
          this.lienProduit = `${this.utilsService.urlServeurFrontend}/${this.nomBoutique}/${this.utilsService.normaliserLien(res.libelle)}-${this.idProduit}`;          
          
          this.router.navigateByUrl(`${this.nomBoutique}/${this.utilsService.normaliserLien(res.libelle)}-${this.idProduit}`);
          this.produitService.nomBoutiqueDansURL = this.nomBoutique;

        } else {
          this.router.navigateByUrl("/boutiqueOuProduitInexistant");  
        }
        
      return res;
  
      });;
       
    return this.produit;
    }


    updateProduit(){
      this.produitService.updateProduit(this.produit).subscribe();  
    }

    saveProduit(){
      console.log("SAUVEGARDE PRODUIT: ");
        // console.log("this.produit.id: "+this.produit.id);
        console.log(this.produit)
        this.produitService.saveProduit(this.produit).subscribe();
    }

    verifPropreteProduit() : boolean{
      // Si il y a un tilisateur connecté
      if (this.authentificationService.estConnecte()) {
        return this.produit.utilisateur.email === localStorage.getItem('email');
      } else {
        return false;
      }  
    }


    /**
     * Liste Illustrations Produits
     */
    getListeIllustrations(produit : string){
      return this.produitService.getListeIllustrations(produit);
    }

    /**
     * Liste des categories disponibles sur le site web
     */
    getListeCategories(){
      return this.filtreService.getCategories();
    }

    /**
     * Liste des boutiques de l'utilisateur connecté
     */
    getListeBoutiquesUtilisateur(email : string){
      return this.boutiqueService.getListeBoutiquesUtilisateur(email)
    }

    supprimerIllustration(idIllustration : number){
      this.produitService.supprimerMedia(idIllustration)
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
