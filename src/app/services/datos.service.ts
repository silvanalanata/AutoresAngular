import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

    getretornar() {
      return this.http.get(environment.servicesURLGetAll);

    }
    getId(id: String){
      let url= `${environment.servicesURLGetById}/${id}`;
      return this.http.get(url)

    }

    postNuevoAutor(nombre: String){
    let url= (environment.servicesURLnuevoAutor);
    return this.http.post(url,{nombre})
}

deleteAutor(id: String) {
  let url= `${environment.servicesURLdelete}/${id}`;
 return this.http.delete(url)
}

updateAutor(autor:any) {
  let url= (environment.servicesURLupdate);
console.log(url)
 return this.http.put(url,autor)

}

getretornarCitas(id:String) {
  let url= `${environment.servicesURLCitasById}/${id}`;
  return this.http.get(url)
}

deleteCitas(_id:any, id_autor:any) {
  let url= `${environment.servicesURLDeleteCitasById}/${id_autor}`;
  return this.http.patch(url,{id:_id})
}

nuevaCitas(id_autor:any, cita : String) {
  console.log("servicio",id_autor)
  let url= `${environment.servicesURLnewcita}/${id_autor}`;
  return this.http.put(url, {citas: cita})
}

agrgarVotos(id_cita:any, id_autor : String, votos_totales: number) {
  let url= `${environment.servicesURLupdateVotos}/${id_autor}`;
  return this.http.put(url, {id: id_cita, votos: votos_totales})


}
}
