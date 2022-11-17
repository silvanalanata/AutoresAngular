import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  datos: any
  autorData: any = ({id:''})
  parametros: any
  autorParams : any
  nombre: any
  citas: any = []
  id_autor : any
  sindatos: boolean= false

  constructor(private datosService: DatosService,private _router: Router, private _activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.parametros = this._activeRouter.params
    this.autorParams = this.parametros._value
    this.autorData.id = this.autorParams.id
    this.retornarCitas()

  }

  retornarCitas(){
    this.datosService.getretornarCitas(this.autorData.id)
    .subscribe( result =>  {this.datos = result
     // this.datos = Array.of(this.datos)
     this.nombre=this.datos.nombre
     this.citas=this.datos.citas
     this.id_autor=this.datos._id

      if(this.citas.length === 0){
        this.sindatos=true
      }
    })

  }

deteleCitas(_id:String){

  this.datosService.deleteCitas(_id,this.id_autor)
  .subscribe( result =>  {this.datos = result
  //  this.datos = Array.of(this.datos)
 //this._router.navigate(['citas/' + this.id_autor]);
 //this._router.navigate(['home/']);
 this.retornarCitas()
  })}


votar(datos:any, param: String){
  console.log("id_cita",datos._id)
  console.log("parametro",param)

if(param === "+"){

  let votos_totales= datos.votos+1
  this.datosService.agrgarVotos(datos._id,this.id_autor,votos_totales)
  .subscribe( result =>  {this.datos = result
    this.retornarCitas()
  })

} else {
  let votos_totales= datos.votos-1
  this.datosService.agrgarVotos(datos._id,this.id_autor,votos_totales)
  .subscribe( result =>  {this.datos = result
    this.retornarCitas()
  })

}






}


}
