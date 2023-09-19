import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CvComponent } from './components/cv/cv.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { CertificadosComponent } from './components/certificados/certificados.component';

const routes: Routes = [

    {path:"",component:SobremiComponent, pathMatch:'full'},
    {path:"skillset",component:SkillsComponent},
    {path:"proyectos",component:ProyectosComponent},
    {path:"sobremi", component:SobremiComponent},
    {path:"cv",component:CvComponent},
    {path:"certificados", component:CertificadosComponent},
    {path:"**", redirectTo:'/', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
