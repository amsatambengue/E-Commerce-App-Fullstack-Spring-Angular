import { PanierComponent } from './panier/panier.component';
import { ListeProduitsComponent } from './boutiques-et-produits/produit/liste-produits/liste-produits.component';
import { SocialLoginComponent } from './authentification/social-login/social-login.component';
import { ConfirmerCompteComponent } from './authentification/confirmer-compte/confirmer-compte.component';
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { CompteComponent } from './compte/compte.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './authentification/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, CanActivate } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification/authentification.component';
import { InscriptionComponent } from './authentification/inscription/inscription.component';
import { ConnexionComponent } from './authentification/connexion/connexion.component';
import { MotDePasseOublieComponent } from './authentification/mot-de-passe-oublie/mot-de-passe-oublie.component';
import { BoutiquesEtProduitsComponent } from './boutiques-et-produits/boutiques-et-produits.component';
import { ListeBoutiquesComponent } from './boutiques-et-produits/boutique/liste-boutiques/liste-boutiques.component';
import { DetailsBoutiqueComponent } from './boutiques-et-produits/boutique/details-boutique/details-boutique.component';
import { DetailsProduitComponent } from './boutiques-et-produits/produit/details-produit/details-produit.component';
import { BoutiqueComponent } from './boutiques-et-produits/boutique/boutique.component';


const routes: Routes = [
  {
    path: "accueil", 
    component:AccueilComponent
  },
  {
    path: "", 
    redirectTo: "accueil", 
    pathMatch: "full"
  },
  {
    path: "login", 
    component:LoginComponent
  },
  {
    path: "social-login", 
    component:SocialLoginComponent
  },
  {
    path: "mot-de-passe-oublie", 
    component:MotDePasseOublieComponent
  },
  {
    path: "compte", 
    component:CompteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "shopping", 
    component:BoutiquesEtProduitsComponent,
    children : [
      {path: '', redirectTo: 'produits', pathMatch: 'full'},
      {path: "produits", component:ListeProduitsComponent},
      {path: "boutiques", component:ListeBoutiquesComponent}
      
    ]
  },
  {
    path: "mes-boutiques", 
    component:ListeBoutiquesComponent,
  },

  {
    path: "panier", component:PanierComponent  
  },



  {
    path: "authentification", 
    component:AuthentificationComponent,
    canActivate : [LoginGuard],
    children : [
      {path: '', redirectTo: 'connexion', pathMatch: 'full'},
      {path: "connexion", component:ConnexionComponent},
      {path: "inscription", component:InscriptionComponent},
      {path: "confirmer-compte", component:ConfirmerCompteComponent}
    ]
  },
  {
  
  //Boutique
    path: ":nomBoutique", component:BoutiqueComponent,
  },
  
  // Produit
  {
    path: ":nomBoutique/:libelleProduit", component:DetailsProduitComponent  
  },
  
  {path: "**", component:AccueilComponent}

];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
