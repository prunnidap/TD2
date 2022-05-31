import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EnseignantListComponent } from './enseignant-list/enseignant-list.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import {AppRoutingModule} from "./app-routing.module";
import { LienGitPipe } from './lien-git.pipe';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddformComponent } from './addform/addform.component';
import { AddformEtudiantComponent } from './addform-etudiant/addform-etudiant.component';
import { AddformPersonnelComponent } from './addform-personnel/addform-personnel.component';
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";
import {EnseignantService} from "./enseignant.service";


@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    EnseignantComponent,
    PersonnelComponent,
    EnseignantListComponent,
    EtudiantListComponent,
    PersonnelListComponent,
    LienGitPipe,
    HomeComponent,
    NavbarComponent,
    AddformComponent,
    AddformEtudiantComponent,
    AddformPersonnelComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MdbCarouselModule,
        HttpClientModule
    ],
  providers: [
    EnseignantService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
