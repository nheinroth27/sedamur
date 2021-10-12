import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasosComponent } from './casos/casos.component';
import { EscritorioComponent } from './escritorio.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';

const routes: Routes = [
  { path:'', component: EscritorioComponent, children: [
    { path: 'casos', component: CasosComponent },
    { path: 'seguimiento', component: SeguimientoComponent }
    
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscritorioRoutingModule { }
