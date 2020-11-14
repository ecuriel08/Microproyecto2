import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { personaje } from 'src/app/shared/components/interfaz/personajes.interface';
import { PersonajeService } from 'src/app/shared/services/personaje.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-detalle-personajes',
  templateUrl: './detalle-personajes.component.html',
  styleUrls: ['./detalle-personajes.component.scss']
})
export class DetallePersonajesComponent implements OnInit {

  personaje$: Observable<personaje>;

  constructor(
    private route:ActivatedRoute,
    private personajeSvc:PersonajeService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params)=> {
      const id = params[ 'id' ];
      this.personaje$ = this.personajeSvc.detallesPersonaje(id);

    });
  }

  goBack(): void{
    this.location.back();
  }

}
