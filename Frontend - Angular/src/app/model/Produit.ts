import { Couleur } from './Couleur';
import { Categorie } from './Categorie';
import { Boutique } from './Boutique';
import { Utilisateur } from './Utilisateur';
import { Media } from './Media';
export class Produit {
	id : number;
	libelle : string;
	prix : number;
	description : string;
	stock : number;
//	delaiRetour : number;
//	nbVues : number;
//	nbConsultations : number;
	noteProduit : number;
    utilisateur : Utilisateur;
    boutique : Boutique;
	categorie : Categorie;
	illustrations : Media[];
	couleurs : Couleur[];

	constructor();
	constructor(idProduit : number);
	constructor(idProduit? : number) {
		this.id = idProduit;
    }


}