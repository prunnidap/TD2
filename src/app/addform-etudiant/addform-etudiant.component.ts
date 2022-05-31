import { Component, OnInit } from '@angular/core';
import {Enseignant} from "../../classes/Enseignant";
import {EnseignantService} from "../enseignant.service";
import {Router} from "@angular/router";
import {Etudiant} from "../../classes/Etudiant";
import {EtudiantService} from "../etudiant.service";

@Component({
  selector: 'app-addform-etudiant',
  templateUrl: './addform-etudiant.component.html',
  styleUrls: ['./addform-etudiant.component.css']
})
export class AddformEtudiantComponent implements OnInit {
  etudiant : Etudiant
  constructor(private service : EtudiantService, private  routeur : Router) {
    this.etudiant = new Etudiant(1, "Pierrot","Lemoine" ,"sandrinerombiere@gmail.com" ,"0897564345", "./assets/pierrot.jpg", "https://coinmarketcap.com/currencies/bitcoin/" ,"https://coinmarketcap.com/currencies/bitcoin/")
  }

  ngOnInit(): void {
  }
  add()
  {
    this.service.addEtudiant(this.etudiant);
    this.routeur.navigateByUrl('/listeEtudiants')
  }
}
