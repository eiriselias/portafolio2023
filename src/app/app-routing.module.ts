import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
 
    {path:"",component:ProyectosComponent, pathMatch:'full'},
    {path:"skillset",component:SkillsComponent},
    {path:"proyectos",component:ProyectosComponent},
    {path:"**", redirectTo:'/', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
