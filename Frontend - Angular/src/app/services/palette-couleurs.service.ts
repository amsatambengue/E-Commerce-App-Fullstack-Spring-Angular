import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class PaletteCouleursService {

  constructor(
    private http : HttpClient,
    private utilsService : UtilsService
    ) { }

  getListeCouleurs(): Observable<any> {
    return this.http.get(`${this.utilsService.apiCouleurs}`);
  }

  // getListeInstancesCouleur(id : number): Observable<any> {
  //   return this.http.get(`${this.utilsService.apiCouleurs}+${id}`);
  // }

  
}
