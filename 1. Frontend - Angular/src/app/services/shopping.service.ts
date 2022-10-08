import { UtilsService } from 'src/app/services/utils.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  switch: boolean;


  constructor(
    private router : Router,
  ) { 
    
  }

  switcher(){
    if (this.switch) {
      this.router.navigateByUrl("shopping/produits");
    } else {
      this.router.navigateByUrl("shopping/boutiques");
    }
  }

  

}

