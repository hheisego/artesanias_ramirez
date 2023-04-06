import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent implements OnInit {


  ModalTitle: string = '';
  taskMission: boolean = false;
  clientes: Cliente[] = [];
  newCliente: Cliente = new Cliente('', '', '', '', '', '', 0);
  apiResponse: any;


  constructor(private service: ClientesService ) { }



  ngOnInit(): void {

    this.refreshClientes();

  }



  addUserClick() {

    this.newCliente = new Cliente('', '', '', '', '', '', 0);
    this.taskMission = true;
    this.ModalTitle = "Agregar Cliente";

  }

  editUserClick(cliente: any) {

    this.ModalTitle = "Editar Cliente"
    this.newCliente = cliente;
    this.taskMission = true;
  }



  respuestaUpdate(event: boolean) {

    console.log(event);

    this.refreshClientes();

  }


  eliminarUser(user: any) {

    this.taskMission = true;
    this.ModalTitle = "Eliminar Cliente";

    if (confirm('Estas Seguro?')) {


      this.service.deleteCliente(user).subscribe(res => {

        this.apiResponse = res;
        this.refreshClientes();

      });

    }
  }

  refreshClientes() {

    this.service.getClientes().subscribe(data => {

      this.clientes = data;
    });
  }

  closeModal() {

    this.refreshClientes();
    this.taskMission = false;

  }


}
