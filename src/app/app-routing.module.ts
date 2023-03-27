import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { Proyecto1Component } from './proyecto1/proyecto1.component';
import { Proyecto2Component } from './proyecto2/proyecto2.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'Conocimientos', component: ConocimientosComponent },
  { path: 'Proyecto1', component: Proyecto1Component },
  { path: 'Proyecto2', component: Proyecto2Component },
  { path: 'Contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
