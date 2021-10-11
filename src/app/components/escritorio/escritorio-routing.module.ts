import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasosComponent } from './casos/casos.component';
import { EscritorioComponent } from './escritorio.component';

const routes: Routes = [
  { path:'', component: EscritorioComponent, children: [
    { path: 'casos', component: CasosComponent },
    
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscritorioRoutingModule { }
