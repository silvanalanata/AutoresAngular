import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarautorComponent } from './components/editarautor/editarautor.component';
import { HomeComponent } from './components/home/home.component';
import { NuevoautorComponent } from './components/nuevoautor/nuevoautor.component';
import { PagesnotfoundComponent } from './components/pagesnotfound/pagesnotfound.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},

  {path:'nuevoautor',component: NuevoautorComponent},

  {path:'editarautor',component: EditarautorComponent},

    //En este orden deben agregarse estas rutas

    // redirige adirectorio web Raiz si no hay nada en la URL

  { path: '', pathMatch: 'full', redirectTo: 'home' },
    // los ** atrapará todo lo que no coincidió con ninguno de las rutas anteriores

  { path: '**', component: PagesnotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
