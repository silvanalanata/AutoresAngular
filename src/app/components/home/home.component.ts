import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datos: any
  datos2: any = {}
  sindatos: boolean= false


  constructor(private datosService: DatosService,private _router: Router) {

  }

  ngOnInit(): void {
    this.retornarAutores()
  }

  retornarAutores(){
    this.datosService.getretornar()
    .subscribe( result =>  {this.datos = result

      if(this.datos.length === 0){
        this.sindatos=true
      }
    })

  }


  retornarCitas(id:String){


      this._router.navigate(['citas/' + id]);

  }
  deleteAutor(_id: String){
    console.log("id delete",_id)
    this.datosService.deleteAutor(_id)
    .subscribe( result =>  this.datos = result)
      this.datos = Array.of(this.datos)
    this.retornarAutores()
  }


}
