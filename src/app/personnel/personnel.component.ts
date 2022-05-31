import {Component, Input, OnInit} from '@angular/core';
import { Personnel } from 'src/classes/Personnel';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  @Input() personnel! : Personnel
  constructor() { }

  ngOnInit(): void {
  }

}
