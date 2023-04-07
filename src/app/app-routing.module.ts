import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { Proyecto1Component } from './proyecto1/proyecto1.component';
import { Proyecto2Component } from './proyecto2/proyecto2.component';
import { Proyecto3Component } from './proyecto3/proyecto3.component';
import { Proyecto6Component } from './proyecto6/proyecto6.component';
import { Proyecto4Component } from './proyecto4/proyecto4.component';
import { Proyecto5Component } from './proyecto5/proyecto5.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'conocimientos', component: ConocimientosComponent },
  { path: 'proyecto1', component: Proyecto1Component },
  { path: 'proyecto2', component: Proyecto2Component },
  { path: 'proyecto3', component: Proyecto3Component },
  { path: 'proyecto4', component: Proyecto4Component },
  { path: 'proyecto5', component: Proyecto5Component },
  { path: 'proyecto6', component: Proyecto6Component },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
