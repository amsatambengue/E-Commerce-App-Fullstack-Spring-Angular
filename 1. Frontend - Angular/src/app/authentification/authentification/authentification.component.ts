import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(
    private utilsService : UtilsService
  ) {
    utilsService.loadScripts(utilsService.authentificationComponentScripts);

   }

  ngOnInit(): void {
    this.utilsService.moveFormOutOfView();

  }

}
