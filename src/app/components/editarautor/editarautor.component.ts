import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editarautor',
  templateUrl: './editarautor.component.html',
  styleUrls: ['./editarautor.component.css']
})
export class EditarautorComponent implements OnInit {

  datos: any
  autorData: any = ({id:'', nombre:''})
  parametros: any
  autorParams : any
  mensajeErr: String = ''


  constructor(private datosService: DatosService,  private _router: Router, private _activeRouter: ActivatedRoute) {

  }

  ngOnInit(): void {


    this.parametros = this._activeRouter.params
    this.autorParams = this.parametros._value
    this.autorData.nombre= this.autorParams.nombre //genera un objeto nuevo autor
    this.autorData.id = this.autorParams._id

  }


  editarAutor(){
    if (this.autorData.nombre===''){
      this.mensajeErr='El nombre del autor es requerido'

    }else if (this.autorData.nombre.length < 3){
      this.mensajeErr='El nombre del autor debe tener al menos 3 caracteres.'
    }else{

          let observable = this.datosService.updateAutor(this.autorData);
            observable.subscribe(data => {
              this._router.navigate(['/home']);
            });

    }

  }

}
