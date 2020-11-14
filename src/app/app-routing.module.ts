import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) 
  }, 
  { 
    path: 'lista-personajes', 
    loadChildren: () => import('./modules/personajes/lista-personajes/lista-personajes.module').then(m => m.ListaPersonajesModule) 
  }, 
  { 
    path: 'detalle-personajes/:id', 
    loadChildren: () => import('./modules/personajes/detalle-personajes/detalle-personajes.module').then(m => m.DetallePersonajesModule) 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { 
    path: 'register', 
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
