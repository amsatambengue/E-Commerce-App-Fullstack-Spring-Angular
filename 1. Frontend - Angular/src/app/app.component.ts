import { UtilsService } from './services/utils.service';
import { Component } from '@angular/core';

import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
 selector: 'get-template',
})
export class GetTemplateDirective {
  @Input() name: string;
  constructor(public template: TemplateRef<any>, utilsService : UtilsService) { 
    // UtilsService.loadScripts(UtilsService.appComponentScripts);
    // utilsService.loadScripts(utilsService.compteComponentScripts);

   }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'fegajaay';


  constructor(){

  }

  onActivate() {
    window.scrollTo(0, 0);
  }
}



