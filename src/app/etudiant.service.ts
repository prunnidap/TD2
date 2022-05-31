import { Injectable } from '@angular/core';
import { Etudiant } from 'src/classes/Etudiant';
import {Enseignant} from "../classes/Enseignant";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  Array : Etudiant[] = []
  constructor() {
    this.Array.push(new Etudiant(1, "Pierrot","Lemoine" ,"sandrinerombiere@gmail.com" ,"0897564345", "./assets/pierrot.jpg", "https://coinmarketcap.com/currencies/bitcoin/" ,"https://coinmarketcap.com/currencies/bitcoin/"))
    this.Array.push(new Etudiant(2, "Robert","Boix" ,"sandrinerombiere@gmail.com" ,"0897564345", "./assets/robert.jpg", "https://coinmarketcap.com/currencies/bitcoin/" ,"https://coinmarketcap.com/currencies/bitcoin/"))
  }
  getEtudiants() : Etudiant[]{
        return this.Array
  }
  addEtudiant(etudiant : Etudiant) : void{
    this.Array.push(etudiant)
  }

}
