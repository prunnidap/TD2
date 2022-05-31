import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/classes/Enseignant';
import {EnseignantService} from "../enseignant.service";

@Component({
  selector: 'app-enseignant-list',
  templateUrl: './enseignant-list.component.html',
  styleUrls: ['./enseignant-list.component.css']
})
export class EnseignantListComponent implements OnInit {
  enseignantArray : Enseignant[] = []
  constructor(service : EnseignantService) {
    service.getEnseignants().subscribe( data => {
      this.enseignantArray = data
    })

    //this.enseignantArray = service.getEnseignants()
  }

  ngOnInit(): void {
  }

}
