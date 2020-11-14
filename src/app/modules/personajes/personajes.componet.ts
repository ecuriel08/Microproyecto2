import { componentFactoryName } from '@angular/compiler';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { personaje } from 'src/app/shared/components/interfaz/personajes.interface';

@Component({
    selector: 'app-personaje',
    template: `<div class="card">
    <div class= "image"> 
        <a [routerLink] = "['/detalle-personaje', personaje.id]">
            <img
                [src]="personaje.image"
                [alt]="personaje.name"
                class="card-img-top"
            >
        </a>
      </div>
      <div class="card-inner">
        <div class="header">
            <a [routerLink] = "['/detalle-personaje', personaje.id]">
                <h2>{{personaje.name | slice: 0:15 }}</h2>
            </a>
            <h4 class= "text-muted">{{personaje.gender}}</h4>
            <small class="text-muted">{{personaje.created | date}}</small>
        </div>
      </div>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class personajeComponent{
    @Input()personaje: personaje;
}