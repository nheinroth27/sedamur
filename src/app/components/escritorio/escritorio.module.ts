import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscritorioRoutingModule } from './escritorio-routing.module'; 
import { SharedModule } from '../shared/shared.module';
import { EscritorioComponent } from './escritorio.component';
import { CasosComponent } from './casos/casos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';

@NgModule({
  declarations: [
    EscritorioComponent,
    CasosComponent,
    NavbarComponent,
    SeguimientoComponent
  ],
  imports: [
    CommonModule,
    EscritorioRoutingModule,
    SharedModule,

  ]
})
export class EscritorioModule { }
