import { Component, OnInit } from '@angular/core';
import {EnseignantService} from "../enseignant.service";
import {Enseignant} from "../../classes/Enseignant";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
  enseignant : Enseignant
  constructor(private service : EnseignantService, private  routeur : Router) {
    this.enseignant = new Enseignant(1, "Sandrine","Rombière" ,"sandrinerombiere@gmail.com" ,"0897564345", "./assets/sandrine.jpg", "B410" ,"CIAD" ,"https://coinmarketcap.com/currencies/bitcoin/", 0)
}

  ngOnInit(): void {
  }
  add()
  {
    //this.service.addEnseignant(this.enseignant);
    this.service.addEnseignant(this.enseignant).subscribe( data => {
      this.enseignant = data
    })

    this.routeur.navigateByUrl('/listeEnseignants')
  }

}
