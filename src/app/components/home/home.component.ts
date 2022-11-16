import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datos: any
  datos2: any = {}
  sindatos: boolean= false


  constructor(private datosService: DatosService) {

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

  deleteAutor(_id: String){
    this.datosService.deleteAutor(_id)
    .subscribe( result =>  this.datos2 = result)
    console.log(_id)
    console.log(this.datos2)
    this.retornarAutores()
  }

}
