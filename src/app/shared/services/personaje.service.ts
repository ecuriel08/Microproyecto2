import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { personaje } from '../components/interfaz/personajes.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http: HttpClient) {}

  busquedaPersonaje(query='', page = 1){
    
    return this.http.get<personaje[]>(`${environment.urlAPI}/?name=${query}&page=${page}`);

  }

  detallesPersonaje(id:number) {
    return this.http.get<personaje>(`${environment.urlAPI}/${id}`);

  }
}
