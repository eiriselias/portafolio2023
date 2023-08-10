import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AplicacionesComponent } from './components/aplicaciones/aplicaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SkillsComponent,
    ContactosComponent,
    ProyectosComponent,
    AplicacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
