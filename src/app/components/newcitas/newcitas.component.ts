import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatosService } from 'src/app/services/datos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newcitas',
  templateUrl: './newcitas.component.html',
  styleUrls: ['./newcitas.component.css']
})
export class NewcitasComponent implements OnInit {
  formNuevaCita: FormGroup
  datos: any
  autorData: any = ({ id: '' })
  parametros: any
  autorParams: any
  mensajeErr: String = ''


  constructor(private datosService: DatosService, private formBuilder: FormBuilder, private _router: Router, private _activeRouter: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.formNuevaCita = this.formBuilder.group({
      cita: [''],
    })

    this.parametros = this._activeRouter.params
    this.autorParams = this.parametros._value
    this.autorData.id = this.autorParams.id

  }

  NuevaCita() {
    const { cita } = this.formNuevaCita.value
    if (cita == "") {
      this.mensajeErr = 'La cita del autor es requerido'
    } else if (cita.length < 3) {
      this.mensajeErr = 'El cita del autor debe tener al menos 3 caracteres.'
    } else {
      let tempObservable = this.datosService.nuevaCitas(this.autorData.id, cita)
      tempObservable.subscribe({
        next: (result) => {
          this.datos = result
          this._router.navigate(['/home']);
        },
        error: (error) => {
          if (error.error) {
            this.mensajeErr = "dato no valido"
          }
        }
      })
    }
  }
}

