import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPersonajesComponent } from './lista-personajes.component';

const routes: Routes = [{ path: '', component: ListaPersonajesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaPersonajesRoutingModule { }
