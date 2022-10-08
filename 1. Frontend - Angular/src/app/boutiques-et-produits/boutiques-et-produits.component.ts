import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-boutiques-et-produits',
  templateUrl: './boutiques-et-produits.component.html',
  styleUrls: ['./boutiques-et-produits.component.css']
})
export class BoutiquesEtProduitsComponent implements OnInit {

  constructor(public utilsService : UtilsService) {
  }

  ngOnInit(): void {
    document.getElementById("diapo-categorie").style.backgroundImage = "url(http://127.0.0.1:8887/Categories/Banners/ToutesSmall.jpg)";

  }

}
