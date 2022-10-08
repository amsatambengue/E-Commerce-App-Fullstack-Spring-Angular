import { Boutique } from './Boutique';

export class Utilisateur{
  id: string;
  email: string;
  motDePasse: string;
  actif: boolean;
  role : number = 1;

  nom : String;
  prenom : String;
  nomUtilisateur : String;
  telephone : String;

  listeBoutiques : Boutique[];


  constructor( email, motDePasse) {
    this.email = email;
    this.motDePasse = motDePasse;
  }

  
}