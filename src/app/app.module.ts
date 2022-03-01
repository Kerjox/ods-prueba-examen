import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { OdsesComponent } from './odses/odses.component';
import { PaisesComponent } from './paises/paises.component';
import { DestinatariosComponent } from './destinatarios/destinatarios.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListProjectsFilter01Component } from './list-projects-filter01/list-projects-filter01.component';
import { Filter01Component } from './list-projects-filter01/filter01/filter01.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    OdsesComponent,
    PaisesComponent,
    DestinatariosComponent,
    NavBarComponent,
    ListProjectsFilter01Component,
    Filter01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
