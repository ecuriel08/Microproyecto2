import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { personaje } from 'src/app/shared/components/interfaz/personajes.interface';
import { PersonajeService } from 'src/app/shared/services/personaje.service';

import { filter, take } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

type RequestInfo = {
  next: string;
};
@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.scss']
})
export class ListaPersonajesComponent implements OnInit {

  personajes: personaje[] = [];

  info: RequestInfo = {
    next: null,
  };

  private pageNum = 1;
  private query: string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;
  showGoUpButton = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private personajeSvc: PersonajeService, 
    private route: ActivatedRoute,
    private router: Router,
    ) { 
      this.onUrlChange();
    }

  ngOnInit(): void {
    this.getPersonajesByQuery();
  }
  
  /* @HostListener('windows:scroll', [])
  onWindowScroll():void {
    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  } */

  onScrollDown():void{
    if(this.info.next){
      this.pageNum ++;
      this.getDataFromService();
    }

  }
  onScrollTop():void{
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }

  private getPersonajesByQuery(): void{
    this.route.queryParamMap.pipe(
      take(1)) .subscribe((params: ParamMap) =>{
        this.query = params[ 'q'];
        this.getDataFromService();
      });

  }

  private onUrlChange(): void{
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationEnd)).subscribe(
        ()=>{
          this.personajes=[];
          this.pageNum = 1;
          this.getPersonajesByQuery();
        }
      )

  }

  private getDataFromService (): void{
    this.personajeSvc.busquedaPersonaje(this.query,this.pageNum)
    .pipe(
      take(1)
    ).subscribe( (res:any) => {
  if(res?.results?.length){
      const {info, results} = res;
      this.personajes = [...this.personajes, ...results];
      this.info = info
  }else {
    this.personajes = [];
  }
    });
  }

}
