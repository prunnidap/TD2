import { Injectable } from '@angular/core';
import { Enseignant } from 'src/classes/Enseignant';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  Array : Enseignant[] = []
  constructor(private http : HttpClient) {
    //this.getEnseignants()
    //this.Array.push(new Enseignant(1, "Sandrine","Rombière" ,"sandrinerombiere@gmail.com" ,"0897564345", "./assets/sandrine.jpg", "B410" ,"CIAD" ,"https://coinmarketcap.com/currencies/bitcoin/", 0))
    //this.Array.push(new Enseignant(2, "Jacqueline","Dupont" ,"sandrinerombiere@gmail.com" ,"0897564345", "./assets/jacqueline.jpg", "B410" ,"ICB" ,"https://coinmarketcap.com/currencies/bitcoin/", 0))
  }
  /*getEnseignants() : Enseignant[]{
    return this.Array
  }*/
  getEnseignants() : Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>('http://localhost:3000/enseignants')
  }
  /*addEnseignant(enseignant : Enseignant) : void{
    this.Array.push(enseignant)
  }*/
  addEnseignant(enseignant: Enseignant): Observable<Enseignant> {
    return this.http.post<Enseignant>('http://localhost:3000/enseignants', enseignant)
  }

}
