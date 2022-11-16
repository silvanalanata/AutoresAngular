import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatosService } from 'src/app/services/datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevoautor',
  templateUrl: './nuevoautor.component.html',
  styleUrls: ['./nuevoautor.component.css']
})
export class NuevoautorComponent implements OnInit {
  formNuevoAutor: FormGroup
  datos: any
  mensajeErr: String = ""

  constructor(private datosService: DatosService, private formBuilder: FormBuilder, private _router: Router) {

  }


  ngOnInit(): void {
    this.formNuevoAutor = this.formBuilder.group({
      nombre: [''],

    })

  }
  NuevoAutor(){
    const {nombre} = this.formNuevoAutor.value
    if(nombre ==""){
      this.mensajeErr ='El nombre del autor es requerido'
    }else if(nombre.length < 3){
      this.mensajeErr ='El nombre del autor debe tener al menos 3 caracteres.'
    }else{

      let tempObservable = this.datosService.postNuevoAutor(nombre)
      tempObservable.subscribe( result => {this.datos = result
        this._router.navigate(['/home']);
      }

        )


    }




   }

}
