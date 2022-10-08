import { BasicAuthHTTPInterceptorService } from './services/basic-auth-httpinterceptor.service';
import { UtilsService } from './services/utils.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
// import "@angular/compiler"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './authentification/login/login.component';
import { CompteComponent } from './compte/compte.component';
import { InscriptionComponent } from './authentification/inscription/inscription.component';
import { AuthentificationService } from './services/authentification.service';
import { AuthentificationComponent } from './authentification/authentification/authentification.component';
import { ConnexionComponent } from './authentification/connexion/connexion.component';
import { CommonModule } from '@angular/common';
import { ConfirmerCompteComponent } from './authentification/confirmer-compte/confirmer-compte.component';
import { SocialLoginComponent } from './authentification/social-login/social-login.component';
import { MotDePasseOublieComponent } from './authentification/mot-de-passe-oublie/mot-de-passe-oublie.component';
import { BoutiquesEtProduitsComponent } from './boutiques-et-produits/boutiques-et-produits.component';
import { BoutiqueComponent } from './boutiques-et-produits/boutique/boutique.component';
import { ListeProduitsComponent } from './boutiques-et-produits/produit/liste-produits/liste-produits.component';
import { FiltreProduitsComponent } from './boutiques-et-produits/produit/filtre-produits/filtre-produits.component';
import { NotationComponent } from './boutiques-et-produits/notation/notation.component';
import { ListeBoutiquesComponent } from './boutiques-et-produits/boutique/liste-boutiques/liste-boutiques.component';
import { DetailsBoutiqueComponent } from './boutiques-et-produits/boutique/details-boutique/details-boutique.component';
import { DetailsProduitComponent } from './boutiques-et-produits/produit/details-produit/details-produit.component';
import { PanierComponent } from './panier/panier.component';
import { PaletteCouleursComponent } from './boutiques-et-produits/produit/palette-couleurs/palette-couleurs.component';
import { UploadFichierComponent } from './upload-fichier/upload-fichier.component';
import { SelectComponent } from './select/select.component';
import { ContactsComponent } from './boutiques-et-produits/boutique/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    CompteComponent,
    InscriptionComponent,
    AuthentificationComponent,
    ConnexionComponent,
    ConfirmerCompteComponent,
    SocialLoginComponent,
    MotDePasseOublieComponent,
    BoutiquesEtProduitsComponent,
    BoutiqueComponent,
    ListeProduitsComponent,
    FiltreProduitsComponent,
    NotationComponent,
    ListeBoutiquesComponent,
    DetailsBoutiqueComponent,
    DetailsProduitComponent,
    PanierComponent,
    PaletteCouleursComponent,
    UploadFichierComponent,
    SelectComponent,
    ContactsComponent
               
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    TextMaskModule

  ],
  providers: [
    UtilsService,
    AuthentificationService,
    {provide:HTTP_INTERCEPTORS, useClass:BasicAuthHTTPInterceptorService, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
