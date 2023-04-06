import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PedidosService {

  constructor(private http: HttpClient) { }


  readonly API_Url = 'http://localhost:5017'


  getPedido(id: any): Observable<any[]> {

    return this.http.get<any>(this.API_Url + '/Pedidos/' + id);

  }

  getPedidos(): Observable<any[]> {

    return this.http.get<any>(this.API_Url + '/Pedidos');

  }

  addNewPedido(nuevoPedido: any) {

    return this.http.post(this.API_Url + '/Pedidos/', nuevoPedido);

  }

  updatePedido(id_: any, modifyPedido: any) {

    return this.http.put(this.API_Url + '/Pedidos/' + id_, modifyPedido);

  }

  deleteCliente(id_: any) {

    return this.http.delete(this.API_Url + '/Pedidos/' + id_);

  }


}
