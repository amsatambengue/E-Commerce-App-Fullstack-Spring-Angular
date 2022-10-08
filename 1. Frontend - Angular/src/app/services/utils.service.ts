import { Injectable, ViewChild, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  /**
   * Nom SiteWeb
   */
    nomSiteWeb : string = "Fega Jaay";

  /**
   * CHEMINS SERVEURS
   */
    // Chemin Serveur Backend
      urlServeurBackend: string = "http://127.0.0.1:8080";
    // ///////////////////////

    // Chemin Serveur Backend
      urlServeurFrontend: string = "http://127.0.0.1:4200";
    // ///////////////////////

    // Chemin images Serveur de Données
      urlServeurFichiers: string = "http://127.0.0.1:8887";
      //données d'utilisateurs
      repertoireDeBase: string = "C:/Users/Amsatus/Documents/My Documents/Studies/Master II/STAGE ALTERNATIF/Projet/CONCEPTION/Serveur de Fichiers";
      // repertoireDeBase: string = "http://127.0.0.1:8887";
      meMyselfAndI: string = "/Me%20Myself%20and%20I";
      maximCollection: string = "/Maxim%20Collection";
      categories: string = "/categories";
    // ///////////////////////

     /**
   * APIs
   */
    apiBoutiques = this.urlServeurBackend+'/boutiques';
    apiUtilisateurs = this.urlServeurBackend+'/utilisateurs';
    apiProduits = this.urlServeurBackend+'/produits';
    apiMedias = this.urlServeurBackend+'/medias'; 
    apiCategories = this.urlServeurBackend+'/categories'; 
    apiCouleurs = this.urlServeurBackend+'/couleurs'; 
    // ///////////////////////

    // ///////////////////////


  /**
   * LISTE CATEGORIES
   */
    listeCategories: string[] = [
      "Toutes",
      "Habits",
      "Electronique",
      "Sacs",
      "Acessoires",
      "Chaussures"
    ]


  /**
   * GESTION D'APPARITION DU FORMULAIRE
  */
    formInView = false;

    moveFormOutOfView() {
      document.getElementById("popup-1").style.transform = 'translate(-100%,-100%) scale(1)';
      // console.log("MOVE SCROLL OUT");

    }

    moveFormInView() {
      document.getElementById("popup-1").style.transform = 'translate(0%,0%) scale(1)';
      // console.log("MOVE SCROLL IN");
    }

    moveForm() {
      if (this.formInView) {
        this.moveFormOutOfView();
      } else {
        this.moveFormInView();
      }
      this.formInView = !this.formInView;
    }
    /**************************************** */


  /**
   * SCRIPTS DES DIFFERENTS COMPOSANTS
  */
    appComponentScripts: string[] = [
      "../assets/vendor/jquery/jquery-3.2.1.min.js",
      "../assets/vendor/animsition/js/animsition.min.js",
      "../assets/vendor/bootstrap/js/popper.js",
      "../assets/vendor/bootstrap/js/bootstrap.min.js",
      // "../assets/vendor/select2/select2.min.js",
      // "../assets/custom/minimumResultsForSearch1.js",
      // "../assets/custom/minimumResultsForSearch2.js",
      "../assets/vendor/daterangepicker/moment.min.js",
      "../assets/vendor/daterangepicker/daterangepicker.js",
      "../assets/vendor/slick/slick.min.js",
      "../assets/js/slick-custom.js",
      "../assets/vendor/countdowntime/countdowntime.js",
      "../assets/vendor/lightbox2/js/lightbox.min.js",
      "../assets/vendor/sweetalert/sweetalert.min.js",
      "../assets/custom/addedItem2.js",
      "../assets/custom/addedItem3.js",

      "../assets/js/main.js",
      // "../assets/js/map-custom.js",
      "../assets/custom/loginPopup.js",
      //Map Test
      // "https://maps.googleapis.com/maps/api/js?key=AIzaSyAKFWBqlKAGCeS1rMVoaNlwyayu0e0YRes",
      //Map Custom Fega Jaay
      // "https://maps.googleapis.com/maps/api/js?key=AIzaSyA5WqcGzdNf3eIQzyMHVNlEXA7QXaANMMM",
      

    ];

    authentificationComponentScripts: string[] = [
      "../../../assets/LoginAssets/vendor/jquery/jquery-3.2.1.min.js",
      "../../../assets/LoginAssets/vendor/animsition/js/animsition.min.js",
      // "../../../assets/LoginAssets/vendor/bootstrap/js/popper.js",
      "../../../assets/LoginAssets/vendor/bootstrap/js/bootstrap.min.js",
      // "../../../assets/LoginAssets/vendor/select2/select2.min.js",
      "../../../assets/LoginAssets/vendor/daterangepicker/moment.min.js",
      "../../../assets/LoginAssets/vendor/daterangepicker/daterangepicker.js",
      "../../../assets/LoginAssets/vendor/countdowntime/countdowntime.js",
      "../../../assets/LoginAssets/js/main.js",

    ];

    compteComponentScripts: string[] = [
      //ANCIEN PAGE COMPTE
      // "assets/CompteAssets/assets/js/jquery-2.2.4.min.js",
      // "assets/CompteAssets/assets/js/bootstrap.min.js",
      // "assets/CompteAssets/assets/js/jquery.bootstrap.wizard.js",
      // "assets/CompteAssets/assets/js/gsdk-bootstrap-wizard.js",
      // "assets/CompteAssets/assets/js/jquery.validate.min.js",

      //NOUVELLE PAGE COMPTE
      "assets/CompteAssets/vendor/jquery/jquery.min.js",
      "assets/CompteAssets/vendor/nouislider/nouislider.min.js",
      "assets/CompteAssets/vendor/wnumb/wNumb.js",
      "assets/CompteAssets/vendor/jquery-validation/dist/jquery.validate.min.js",
      "assets/CompteAssets/vendor/jquery-validation/dist/additional-methods.min.js",
      "assets/CompteAssets/js/main.js"
    ];

    boutiquesEtProduitsScripts: string[] = [
      // "../assets/vendor/noui/nouislider.min.js",
      // "../assets/custom/filterBar.js",
      // "../assets/js/main.js",
      "../assets/custom/boutonSwitch.js",
      "../assets/custom/addedItem2.js",
      "../assets/custom/addedItem3.js",
      "../assets/custom/minimumResultsForSearch2.js",
    ];

    menuComponentScripts: string[] = [
      "../assets/MenuAssets/vendor/jquery-3.2.1.min.js",

      // "../assets/MenuAssets/vendor/bootstrap-4.1/popper.min.js",
      "../assets/MenuAssets/vendor/bootstrap-4.1/bootstrap.min.js",

      "../assets/MenuAssets/vendor/slick/slick.min.js",
      "../assets/MenuAssets/vendor/wow/wow.min.js",
      "../assets/MenuAssets/vendor/animsition/animsition.min.js",
      "../assets/MenuAssets/vendor/bootstrap-progressbar/bootstrap-progressbar.min.js",
      "../assets/MenuAssets/vendor/counter-up/jquery.waypoints.min.js",
      "../assets/MenuAssets/vendor/counter-up/jquery.counterup.min.js",
      "../assets/MenuAssets/vendor/circle-progress/circle-progress.min.js",
      "../assets/MenuAssets/vendor/perfect-scrollbar/perfect-scrollbar.js",
      "../assets/MenuAssets/vendor/chartjs/Chart.bundle.min.js",
      // "../assets/MenuAssets/vendor/select2/select2.min.js",

      "../assets/MenuAssets/js/main.js",
    ];

    notationComponentScripts: string[] = [
      "../assets/NotationAssets/notation.js"

    ];

    detailsProduitComponentScripts: string[] = [
      "../assets/MenuAssets/vendor/select2/select2.min.js",
      // "../assets/custom/editableText.js",
      "https://cdn.jsdelivr.net/sharer.js/latest/sharer.min.js",
      "../assets/custom/socialShare.js",
      // "../assets/custom/slugyfy.js",
      // "../assets/custom/currencyFormatting.js"

    ];

    uploadComponentScripts: string[] = [
      "assets/custom/limitMediaTypes.js",
    ];

  //CHARGEUR DE SCRIPTS
    loadScripts(scriptsList: string[]) {
      for (let i = 0; i < scriptsList.length; i++) {
        const node = document.createElement('script');
        node.src = scriptsList[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    }

  /**
   * NORMALISATION DE LIEN VERS LE FORMAT "ceci-est-un-lien-normalisé"
  */
    normaliserLien(Text) {
      return Text
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
        ;
    }

  constructor() { }
}


