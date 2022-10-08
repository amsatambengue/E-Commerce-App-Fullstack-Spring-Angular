import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FiltreService {

  constructor(
    private utilsService : UtilsService,
    private http : HttpClient
  ) { }


  getCategorie(nomCategorie: string): Observable<any> {
    return this.http.get(`${this.utilsService.apiCategories}/${nomCategorie}`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.utilsService.apiCategories}`);
  }

  getPaletteCouleurs(): Observable<any>{
    return this.http.get(`${this.utilsService.apiCouleurs}/paletteCouleurs`);
  }
}
