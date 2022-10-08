import { UploadFichierService } from './../services/upload-fichier.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-fichier',
  templateUrl: './upload-fichier.component.html',
  styleUrls: ['./upload-fichier.component.css']
})
export class UploadFichierComponent implements OnInit {
  message: string;
  @Input() txtBoutonUpload : string;
  //les differents types de fichiers à uploader : [logo, profil, illustration], utilisés pour définir le bon repertoire de sauvegarde
  @Input() typeFichier : string;

  constructor(  
    public uploadFichierService : UploadFichierService  ) { 
    // utilsService.loadScripts(utilsService.uploadComponentScripts);
  }

  ngOnInit(): void {
  }

  //Est appelé dès que l'utilisateur selectionne une image
  public onFileChanged(event) {
    this.uploadFichierService.typeFichier = this.typeFichier;       
    //Selection du Fichier
    this.uploadFichierService.fichierSelectionne = event.target.files[0];
    //Upload du fichier
    this.uploadFichierService.executionUpload();
  }
}
