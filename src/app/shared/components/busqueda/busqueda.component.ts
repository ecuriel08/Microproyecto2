import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  busqueda(value: string){
    if(value && value.length > 3){
      this.router.navigate(['/lista-personajes'],{
        queryParams: { q: value},
      });
    }
  }

}
