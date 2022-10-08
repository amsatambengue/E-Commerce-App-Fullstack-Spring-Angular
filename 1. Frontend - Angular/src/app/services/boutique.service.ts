import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Boutique } from '../model/Boutique';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  constructor(
    private http : HttpClient,
    private utilsService : UtilsService,
    private router : Router

  ) { 

  }

  // getBoutique(id: number): Observable<any> {
  //   return this.http.get(`${this.utilsService.apiBoutiques}/${id}`);
  // }
  
  getBoutiqueByNom(nomBoutique: string): Observable<any> {
    return this.http.get(`${this.utilsService.apiBoutiques}/${nomBoutique}`);
  }

  createBoutique(boutique: Object): Observable<Object> {
    return this.http.post(`${this.utilsService.apiBoutiques}`, boutique);
  }

  updateBoutique(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.utilsService.apiBoutiques}/${id}`, value);
  }

  deleteBoutique(id: number): Observable<any> {
    return this.http.delete(`${this.utilsService.apiBoutiques}/${id}`, { responseType: 'text' });
  }

  getListeBoutiques(): Observable<any> {
    return this.http.get(`${this.utilsService.apiBoutiques}`);
  }

  getProduits(nomBoutique: string): Observable<any> {
    return this.http.get(`${this.utilsService.apiBoutiques}/${nomBoutique}/produits`);
  }

  getListeBoutiquesUtilisateur(email : string): Observable<any> {
    return this.http.get(`${this.utilsService.apiUtilisateurs}/${email}/boutiques`);
  }

  public saveBoutique(boutique) {
    return this.http.post<Boutique>(this.utilsService.apiBoutiques, boutique);
  }
  // getListeBoutiquesBoutique(): Observable<any> {
  //   return this.http.get(`${this.baseUrlBoutique}/habza/boutiques`);
  // }



}
