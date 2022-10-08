import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  //ce qui fait objet de selection...par exemple boutique, produit, etc.
  @Input() titreSelect : string;
  @Input() itemSelectionne : string;
  //la liste d'items populant la selection
  @Input() items;


  @Output() selectEventEmmitter = new EventEmitter();

  constructor() { }

  onItemSelectionne(item : any){
      this.selectEventEmmitter.emit(item);
  }
  
  ngOnInit(): void {
  }

}
