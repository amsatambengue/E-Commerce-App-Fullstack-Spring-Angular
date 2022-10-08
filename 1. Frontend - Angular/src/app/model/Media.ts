import { Produit } from 'src/app/model/Produit';
import { Boutique } from './Boutique';
import { Utilisateur } from './Utilisateur';
export class Media {
	id : number;
	cheminFichier : string;
	ordreIllustration : number;
	typeMedia : number;
	boutique : Boutique;
	produit : Produit;
	utilisateur : Utilisateur;
}