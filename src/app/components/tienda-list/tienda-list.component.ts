import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidosService } from 'src/app/services/pedidos.service';


@Component({
  selector: 'app-tienda-list',
  templateUrl: './tienda-list.component.html',
  styleUrls: ['./tienda-list.component.scss']
})
export class TiendaListComponent implements OnInit {


  ModalTitle: string = '';
  taskMission: boolean = false;
  pedidos: Pedido[] = [];
  newPedido: Pedido = new Pedido('', '', '', 0, '', '', 0, 0, 0, 0, 0);
  apiResponse: any;


  constructor(private service: PedidosService) { }



  ngOnInit(): void {

    this.refreshPedidos();

  }



  addUserClick() {

    this.newPedido = new Pedido('', '', '', 0, '', '', 0, 0, 0, 0, 0);
    this.taskMission = true;
    this.ModalTitle = "Agregar Pedido";

  }

  editUserClick(cliente: any) {

    this.ModalTitle = "Editar Pedido"
    this.newPedido = cliente;
    this.taskMission = true;
  }



  respuestaUpdate(event: boolean) {

    console.log(event);

    this.refreshPedidos();

  }


  eliminarUser(user: any) {

    this.taskMission = true;
    this.ModalTitle = "Eliminar Pedido";

    if (confirm('Estas Seguro?')) {


      this.service.deleteCliente(user).subscribe(res => {

        this.apiResponse = res;
        this.refreshPedidos();

      });

    }
  }

  refreshPedidos() {

    this.service.getPedidos().subscribe(data => {

      this.pedidos = data;
    });
  }

  closeModal() {

    this.refreshPedidos();
    this.taskMission = false;

  }


}
