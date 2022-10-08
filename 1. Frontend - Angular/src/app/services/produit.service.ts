import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../model/Produit';
import { UtilsService } from './utils.service';
import { UploadFichierService } from './upload-fichier.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: Observable<Produit[]>;
  produitSuppress : Produit[]
  nomBoutiqueDansURL : string; //boutique avec des produits à afficher
  // produit : Observable<Produit>;
  produit : Produit; //Produit Ciblé par l'URL entré à travers le navigateur

  constructor(
    private http: HttpClient,
    private utilsService : UtilsService,
    private uploadFichierService : UploadFichierService
    ) { 
 
  }

  getProduit(idProduit : string): Observable<Produit> {
    return this.http.get<Produit>(`${this.utilsService.apiProduits}/${idProduit}`);
  }

  createProduit(produit: Object): Observable<Object> {
    return this.http.post(`${this.utilsService.apiProduits}`, produit);
  }

  // updateProduit(produit: Produit): Observable<Object> {
  //   return this.http.put(`${this.utilsService.apiProduits}`, produit);
  // }

  public saveProduit(produit) {
    return this.http.post<Produit>(this.utilsService.apiProduits, produit);
  }

  public updateProduit(produit) {
    return this.http.patch<Produit>(this.utilsService.apiProduits, produit);
  }
  

  // public updateCouleursProduit(idProduit, couleurs) {
  //   return this.http.post<Produit>(this.utilsService.apiCouleurs, idProduit, idCou);
  // }


  deleteProduit(id: number): Observable<any> {
    return this.http.delete(`${this.utilsService.apiProduits}/${id}`, { responseType: 'text' });
  }


  getListeProduits(): Observable<any> {
    return this.http.get(`${this.utilsService.apiProduits}`);
  }
  
  getListeProduitsBoutique(nomBoutique : string): Observable<any> {
    return this.http.get(`${this.utilsService.apiBoutiques}/${nomBoutique}/produits`);
  }



  getListeIllustrations(produit : string) : Observable<any>  {
      return this.http.get(`${this.utilsService.apiProduits}/${produit}/medias`);
  }

  supprimerMedia(idMedia: number): Observable<any>{
    return this.http.delete(`${this.utilsService.apiMedias}/${idMedia}?repertoire=${this.uploadFichierService.repertoireProduit()}`);
  }

}

