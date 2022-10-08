import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boutique } from '../model/Boutique';
import { BoutiqueService } from './boutique.service';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class UploadFichierService {

  estUneTentativeDeModification: boolean;

  // Variables utilisées par uploadfichierService
  message: string;
  fichierSelectionne: File;
  nomFichierSelectionne: string;
  points;
  extensionsFichier = ['.jpg', 'png', 'jpeg', 'JPG', 'PNG', 'JPEG'];
  extensionFichier: string;
  //les differents types de fichiers à uploader : [logo, profil, illustration], utilisés pour définir le bon repertoire de sauvegarde
  typeFichier: string;


  //Infos nécessaires pour sauvegarder le fichier sur le disque
  idProduit;
  nomBoutique;
  boutique : Boutique;
  idUtilisateur;
  illustration;
  listeIllustrations;
  repertoireUpload: string;
  nouveauNomFichier: string;
  //string intervenant dans la reque http.post d'upload de fichier
  postString: string;
  //parametres communs (ajout ou modification) utilisés par postString
  parametresCommuns: string;
  //repertoire de sauvegarde sur le systeme de fichiers
  repertoireDeSauvegarde: string;
  //peut etre "ajouter" oubien "modifier" fichier
  typeUpload: string;

  constructor(
    private utilsService: UtilsService,
    private httpClient: HttpClient,
    private boutiqueService : BoutiqueService
  ) {
  }

  /**
   * REPERTOIRES
   */

  repertoireParDefaut(){
    this.repertoireUpload = `${this.utilsService.repertoireDeBase}/Default`;
    return this.repertoireUpload;   
  }

  repertoireUtilisateur() {
    this.repertoireUpload = `${this.utilsService.repertoireDeBase}/Utilisateurs/${this.idUtilisateur}`;
    return this.repertoireUpload;
  }

  repertoireBoutique() {
    this.repertoireUpload = `${this.repertoireUtilisateur()}/Boutiques/${this.nomBoutique}`;
    return this.repertoireUpload;
  }

  repertoireProduit() {
    this.repertoireUpload = `${this.repertoireBoutique()}/Produits/${this.idProduit}`;
    return this.repertoireUpload;
  }

  repertoireLogo() {
    this.repertoireUpload = `${this.repertoireBoutique()}`;
    return this.repertoireUpload;
  }

  repertoireProfil() {
    this.repertoireUpload = `${this.repertoireUtilisateur()}/Profil`;
    return this.repertoireUpload;
  }



  //////////////////////////////////////////


  /**
   * UPLOAD DU FICHIER
   */
  executionUpload() {
    if (this.fichierEstConforme()) {
      this.uploaderFichier();
    }
  }

  //Verifie la conformité du fichier selectionné
  fichierEstConforme(): boolean {
    this.nomFichierSelectionne = this.fichierSelectionne.name;

    //récupération des chaines séparées par un "."
    this.points = this.nomFichierSelectionne.split(".");

    //récuperer la partie après le dernier point
    this.extensionFichier = "." + this.points[this.points.length - 1];

    if (this.extensionsFichier.join(".").indexOf(this.extensionFichier) != -1) {
      //si aucun fichier selectionné
      if (this.nomFichierSelectionne == "") return;
      return true;
    }

    else {
      alert("Le ficher sélectionné est de type " + this.extensionFichier + "\n\nVeuillez selectionner uniquement les fichiers qui se terminent par des types: \n\n" + (this.extensionsFichier.join(" .")));
      return false;
    }
  }

  //Envoie l'image sur le serveur de données et consigner le chemin dans la base de données
  uploaderFichier() {
    // L'API FormData fournit des méthodes et des propriétés pour nous permettre de préparer facilement les données de formulaire à envoyer avec les requêtes HTTP POST.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.fichierSelectionne, this.fichierSelectionne.name);
    //initialisatin de postString avec les parametres en commun d'ajout et de modification
    this.postString = `${this.utilsService.urlServeurBackend}/image`;


    /**
     * FICHIER ILLUSTRATION PRODUIT
     */
    if (this.typeFichier === "illustration") {
      this.repertoireDeSauvegarde = this.repertoireProduit();
      console.log(this.repertoireDeSauvegarde);
      

      //Si c'est un bouton "Ajouter" qui a été cliqué
      if (!this.estUneTentativeDeModification) {
        this.typeUpload = "ajouter";
        this.nouveauNomFichier = this.listeIllustrations.length + 1;
        this.postString = `${this.postString}/illustration/${this.typeUpload}?repertoireDeSauvegarde=${this.repertoireDeSauvegarde}&nomFichier=${this.nouveauNomFichier}&extension=${this.extensionFichier}&idProduit=${this.idProduit}`;
      }
      //Si c'est un bouton "Modifier" qui a été cliqué
      else {
        this.typeUpload = "modifier";
        //Nom ancien fichier avec nouvel extension
        this.nouveauNomFichier = this.illustration.cheminFichier.substring(this.illustration.cheminFichier.lastIndexOf("/") + 1, this.illustration.cheminFichier.length);
        this.postString = `${this.postString}/illustration/${this.typeUpload}?repertoireDeSauvegarde=${this.repertoireDeSauvegarde}&nomFichier=${this.nouveauNomFichier}&extension=${this.extensionFichier}&idIllustration=${this.illustration.id}`;
      }

    }

    /**
     * FICHIER LOGO BOUTIQUE
     */
    if (this.typeFichier === "logo") {
      this.repertoireDeSauvegarde = this.repertoireLogo();

      console.log("REPERTOIRE LOGO");
      console.log(this.repertoireDeSauvegarde);

      if (!this.estUneTentativeDeModification) {
        this.typeUpload = "ajouter";
        this.nouveauNomFichier = "logo";
        this.postString = `${this.postString}/logo/${this.typeUpload}?repertoireDeSauvegarde=${this.repertoireDeSauvegarde}&nomFichier=${this.nouveauNomFichier}&extension=${this.extensionFichier}&idLogo=${this.boutique.logo.id}`;
      }
      //Si c'est un bouton "Modifier" qui a été cliqué
      else {
        this.typeUpload = "modifier";
        //Nom ancien fichier avec nouvel extension
        this.nouveauNomFichier = this.boutique.logo.cheminFichier.substring(this.boutique.logo.cheminFichier.lastIndexOf("/") + 1, this.boutique.logo.cheminFichier.length);
        this.postString = `${this.postString}/logo/${this.typeUpload}?repertoireDeSauvegarde=${this.repertoireDeSauvegarde}&nomFichier=${this.nouveauNomFichier}&extension=${this.extensionFichier}&idLogo=${this.boutique.logo.id}`;
        
        // this.boutique.logo.cheminFichier = "http://127.0.0.1:8887/Utilisateurs/228/Boutiques/habza/logo"+this.extensionsFichier;
        // this.boutiqueService.saveBoutique(this.boutique).subscribe();
      }

    }

    /**
     * FICHIER PROFIL UTILISATEUR
     */    
    if (this.typeFichier === "profil") {
      this.nouveauNomFichier = "profil";
      this.postString = `${this.postString}/profil`;
      this.repertoireDeSauvegarde = this.repertoireProfil();
    }

    this.parametresCommuns = `?repertoireDeSauvegarde=${this.repertoireDeSauvegarde}&nomFichier=${this.nouveauNomFichier}&extension=${this.extensionFichier}`;
    // this.postString =  `${this.utilsService.urlServeurBackend}/image/${this.typeUpload}?repertoireDeSauvegarde=${this.repertoireDeSauvegarde}&nomFichier=${this.nouveauNomFichier}&extension=${this.extensionFichier}`;

    //verifie si bouton "ajouter" oubien "modifier" cliqué
    // this.verifTypeUpload();

    //Upload Effectif du fichier
    this.uploader(this.postString, uploadImageData);

  }

  uploader(postString: string, uploadImageData: FormData) {
    this.httpClient.post(postString, uploadImageData, { observe: 'response', responseType: 'text' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Fichier chargé avec succes';
          window.location.reload();
        } else {
          this.message = 'Fichier non chargé avec succes';
        }
        alert(this.message);
      });

  }

  /**
   * VERIFICATION BOUTON CLIQUE
   */
  verifTypeUpload() {
    //Si c'est un bouton "Ajouter" qui a été cliqué
    if (!this.estUneTentativeDeModification) {
      this.typeUpload = "ajouter";
      this.postString = `${this.postString}/${this.typeUpload}/${this.parametresCommuns}`
      this.postString = `${this.postString}&idProduit=${this.idProduit}`;
      // this.postString = `${this.utilsService.urlServeurBackend}/image/${this.typeUpload}?repertoireDeSauvegarde=${this.repertoireDeSauvegarde}&nomFichier=${this.nouveauNomFichier}&extension=${this.extensionFichier}&idProduit=${this.idProduit}`;
    }

    //Si c'est un bouton "Modifier" qui a été cliqué
    else {
      this.typeUpload = "modifier";
      this.postString = `${this.postString}&idIllustration=${this.illustration?.id}`;
      // this.postString = `${this.utilsService.urlServeurBackend}/image/${this.typeUpload}?repertoireDeSauvegarde=${this.repertoireDeSauvegarde}&nomFichier=${this.nouveauNomFichier}&extension=${this.extensionFichier}&idIllustration=${this.illustration?.id}`;
    }
  }


  remplacerLogo(idMedia: number): Observable<any>{
    return this.httpClient.patch(`${this.utilsService.apiMedias}/${idMedia}?repertoire=${this.repertoireBoutique()}`, { responseType: 'text' });
  }

}
