import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/classes/Etudiant';
import { EtudiantService} from 'src/app/etudiant.service'

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {
  etudiantArray : Etudiant[] = []
  liensGit : string[] = []

  constructor(service : EtudiantService) {
    this.etudiantArray = service.getEtudiants()
    this.liensGit.push()
  }

  ngOnInit(): void {
  }

}
