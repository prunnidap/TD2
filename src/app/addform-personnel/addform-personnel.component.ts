import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Personnel} from "../../classes/Personnel";
import {PersonnelService} from "../personnel.service";


@Component({
  selector: 'app-addform-personnel',
  templateUrl: './addform-personnel.component.html',
  styleUrls: ['./addform-personnel.component.css']
})
export class AddformPersonnelComponent implements OnInit {
  personnel : Personnel
  constructor(private service : PersonnelService, private  routeur : Router) {
    this.personnel = new Personnel(1, "Julie","Jabert" ,"sandrinerombiere@gmail.com" ,"0897564345", "./assets/julie.jpg", "B410" ,"Administration" ,"https://coinmarketcap.com/currencies/bitcoin/")
  }

  ngOnInit(): void {
  }
  add()
  {
    this.service.addPersonnel(this.personnel);
    this.routeur.navigateByUrl('/listePersonnel')
  }
}
