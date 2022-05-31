import { Component, OnInit } from '@angular/core';
import { Personnel } from 'src/classes/Personnel';
import {Enseignant} from "../../classes/Enseignant";
import {PersonnelService} from "../personnel.service";

@Component({
  selector: 'app-personnel-list',
  templateUrl: './personnel-list.component.html',
  styleUrls: ['./personnel-list.component.css']
})
export class PersonnelListComponent implements OnInit {
  personnelArray : Personnel[] = []
  constructor(service : PersonnelService) {
    this.personnelArray = service.getPersonnels()
  }

  ngOnInit(): void {


  }

}
