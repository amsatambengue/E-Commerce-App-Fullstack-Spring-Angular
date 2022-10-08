import { ProduitService } from 'src/app/services/produit.service';
import { AuthentificationService } from './../services/authentification.service';
import { UtilsService } from './../services/utils.service';
import { Component, OnInit  } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../model/Utilisateur';
import { Produit } from '../model/Produit';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
  
})
export class MenuComponent implements OnInit {
  estConnecte: boolean;
  utilisateur:Utilisateur = new Utilisateur("","");

  // Variables pour fichier HTML
  txtTopbar="Livraison gratuite pour les commandes standard de plus de 50 000 FCFA";
  txtInfoMail="Aide à la commande au 33 860 85 06";
  txtAccueil="Accueil";
  txtShopping = "Shopping";
  txtAPropos="À propos";
  txtContact = "Contact";
  txtVoirPanier = "Voir Panier";
  txtReglerNote = "Regler";
  txtDeconnexion = "Déconnexion";
  // Variables pour fichier HTML

  estUnFormulaireLogin= JSON.parse(localStorage.getItem("estUnFormulaireLogin"));

  constructor(
    public utilsService : UtilsService,
    private authentificationService: AuthentificationService,
    public produitService : ProduitService,
    private utilisateurService : UtilisateurService
    )
  {
    utilsService.loadScripts(utilsService.appComponentScripts);
    // utilsService.loadScripts(utilsService.compteComponentScripts);
    utilsService.loadScripts(utilsService.menuComponentScripts);
  }

  ngOnInit(): void {
    this.utilsService.moveFormOutOfView();
    
    if (this.verifConnection()) {
      this.detailsUtilisateur();
      this.utilisateur = this.utilisateurService.utilisateur;
    }
    
    // this.produitService.nomBoutiqueAssocieAuProduit=this.utilsService.nomSiteWeb;
    // this.produitService.nomBoutiqueAssocieAuProduit;
    // console.log("NOM BOUTIQUE:" );
  }

  moveForm() {
    this.utilsService.moveForm();
  }

  verifConnection(){
    // console.log("verifConnection()");
    // console.log(this.authentificationService.estConnecte());
  
    this.estConnecte = this.authentificationService.estConnecte();
    return this.estConnecte;
  }

  logout(){
    this.authentificationService.logout();
  }

  async detailsUtilisateur(){
    // console.log("AVANT");
    await this.utilisateurService.detailsUtilisateur()
      .toPromise()
      .then((res) => {
        this.utilisateur = res;
        // console.log("DATA: "+this.utilisateur.id);
        // console.log(this.utilisateur);
      });;
    // console.log("APRES");
  }


}
