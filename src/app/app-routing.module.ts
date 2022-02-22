import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from "./proyectos/proyectos.component";
import { PaisesComponent } from "./paises/paises.component";
import { OdsesComponent } from "./odses/odses.component";
import { DestinatariosComponent } from "./destinatarios/destinatarios.component";

const routes: Routes = [
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'paises', component: PaisesComponent},
  {path: 'odses', component: OdsesComponent},
  {path: 'destinatarios', component: DestinatariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
