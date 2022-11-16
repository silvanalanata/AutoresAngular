import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesnotfoundComponent } from './components/pagesnotfound/pagesnotfound.component';
import { NuevoautorComponent } from './components/nuevoautor/nuevoautor.component';
import { EditarautorComponent } from './components/editarautor/editarautor.component';
import { HomeComponent } from './components/home/home.component';
import { DatosService } from './services/datos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    PagesnotfoundComponent,
    NuevoautorComponent,
    EditarautorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
