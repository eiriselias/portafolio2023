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
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/idiomas/','.json');
}

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
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
