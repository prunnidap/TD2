import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddformEtudiantComponent } from './addform-etudiant/addform-etudiant.component';
import { AddformPersonnelComponent } from './addform-personnel/addform-personnel.component';
import { AddformComponent } from './addform/addform.component';
import {EtudiantListComponent} from "./etudiant-list/etudiant-list.component";
import {EnseignantListComponent} from "./enseignant-list/enseignant-list.component";
import {PersonnelListComponent} from "./personnel-list/personnel-list.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'addEtudiant', component: AddformEtudiantComponent},
  {path:'addEnseignant', component: AddformComponent},
  {path:'addPersonnel', component: AddformPersonnelComponent},
  {path:'listeEtudiants', component: EtudiantListComponent},
  {path:'listeEnseignants', component: EnseignantListComponent},
  {path:'listePersonnel', component: PersonnelListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
