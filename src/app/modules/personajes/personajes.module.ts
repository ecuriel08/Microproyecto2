import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { DetallePersonajesComponent } from './detalle-personajes/detalle-personajes.component';
import { personajeComponent } from './personajes.componet';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    ListaPersonajesComponent,
    DetallePersonajesComponent,
    personajeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule,

  ],
  exports: [
    
    ListaPersonajesComponent,
    DetallePersonajesComponent,
    personajeComponent,
  ],
})
export class PersonajesModule { }
