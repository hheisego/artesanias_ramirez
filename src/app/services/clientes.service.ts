import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ClientesService {

  constructor(private http: HttpClient) { }


  readonly API_Url = 'http://localhost:5017'


  getCliente(id: any): Observable<any[]> {

    return this.http.get<any>(this.API_Url + '/Clientes/' + id);

  }

  getClientes(): Observable<any[]> {

    return this.http.get<any>(this.API_Url + '/Clientes');

  }

  addNewCliente(nuevoUsuario: any) {

    return this.http.post(this.API_Url + '/Clientes/', nuevoUsuario);

  }

  updateCliente(id_: any, modifyUsuario: any) {

    return this.http.put(this.API_Url + '/Clientes/' + id_, modifyUsuario);

  }

  deleteCliente(id_: any) {

    return this.http.delete(this.API_Url + '/Clientes/' + id_);

  }


}
