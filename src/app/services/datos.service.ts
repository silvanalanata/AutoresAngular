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
      let url= `${environment.servicesURGetById}/${id}`;
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
}
