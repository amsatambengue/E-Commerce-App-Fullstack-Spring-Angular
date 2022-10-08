import { Media } from './Media';
import { Utilisateur } from './Utilisateur';

export class Boutique{

    id : number;
    logo : Media
    nom : String;
    slogan : String;
    description : String;
    nbProduits : number;
    noteBoutique : number;
    telephone : String;
    whatsapp : String;
    proprietaire : number;
    utilisateur : Utilisateur;
  
    constructor();
    constructor(nom:string, slogan : String, description : String);
    constructor(nom?:string, slogan? : String, description? : String) {
        this.nom = nom;
        this.slogan = slogan;
        this.description = description;    
    }

}