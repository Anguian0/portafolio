import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { Proyecto1Component } from './proyecto1/proyecto1.component';
import { Proyecto2Component } from './proyecto2/proyecto2.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'conocimientos', component: ConocimientosComponent },
  { path: 'proyecto1', component: Proyecto1Component },
  { path: 'proyecto2', component: Proyecto2Component },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
