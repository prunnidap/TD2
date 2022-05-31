import { Component, OnInit, Input} from '@angular/core';
import { Enseignant } from 'src/classes/Enseignant';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  @Input() enseignant! : Enseignant
  constructor() { }

  ngOnInit(): void {
  }

  decrement(){
    if (this.enseignant.likes > 0)
      this.enseignant.likes -=1;
  }
}
