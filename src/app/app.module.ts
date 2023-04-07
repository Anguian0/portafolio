import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { Proyecto1Component } from './proyecto1/proyecto1.component';
import { Proyecto2Component } from './proyecto2/proyecto2.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Proyecto3Component } from './proyecto3/proyecto3.component';
import { Proyecto4Component } from './proyecto4/proyecto4.component';
import { Proyecto5Component } from './proyecto5/proyecto5.component';
import { Proyecto6Component } from './proyecto6/proyecto6.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ConocimientosComponent,
    Proyecto1Component,
    Proyecto2Component,
    ContactoComponent,
    Proyecto3Component,
    Proyecto4Component,
    Proyecto5Component,
    Proyecto6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
