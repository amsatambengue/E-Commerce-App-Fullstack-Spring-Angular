import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.css']
})
export class NotationComponent implements OnInit {

  constructor(private utilsService : UtilsService) { 
    utilsService.loadScripts(utilsService.notationComponentScripts);
    

  }

  ngOnInit(): void {
  }

}
