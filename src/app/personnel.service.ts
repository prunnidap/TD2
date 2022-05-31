import { Injectable } from '@angular/core';
import {Personnel} from "../classes/Personnel";
import {Enseignant} from "../classes/Enseignant";

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
  Array : Personnel[] = []
  constructor() {
    this.Array.push(new Personnel(1, "Julie","Jabert" ,"sandrinerombiere@gmail.com" ,"0897564345", "./assets/julie.jpg", "B410" ,"Administration" ,"https://coinmarketcap.com/currencies/bitcoin/"))
    this.Array.push(new Personnel(2, "Xavier","Maine" ,"sandrinerombiere@gmail.com" ,"0897564345", "./assets/xavier.jpg", "B412" ,"Finances" ,"https://coinmarketcap.com/currencies/bitcoin/"))
  }
  getPersonnels() : Personnel[]{
        return this.Array
  }
  addPersonnel(personnel : Personnel) : void{
    this.Array.push(personnel)
  }
}
