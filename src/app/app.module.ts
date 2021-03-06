import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BusquedaComponent } from './shared/components/busqueda/busqueda.component';
import { HttpClientModule } from '@angular/common/http';

//COSAS DE FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule} from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    //COSAS DE FIREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
