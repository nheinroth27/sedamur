import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes

import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'escritorio', loadChildren: () => import('./components/escritorio/escritorio.module').then(x=>x.EscritorioModule) },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
