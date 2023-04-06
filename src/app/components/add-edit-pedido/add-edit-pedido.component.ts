import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidosService } from 'src/app/services/pedidos.service';


@Component({
  selector: 'app-add-edit-pedido',
  templateUrl: './add-edit-pedido.component.html',
  styleUrls: ['./add-edit-pedido.component.scss']
})

export class AddEditPedidoComponent implements OnInit {

  @Input() mission = '';
  @Input() request: Pedido = new Pedido('', '', '', 0, '', '', 0, 0, 0, 0, 0);
  @Output() update = new EventEmitter();
  apiResponse: any;


  constructor(private service: PedidosService) { }


  ngOnInit(): void {

    this.request = this.request;

  }


  onFormSubmit() {


    if (this.mission == "Agregar Pedido") {


      this.service.addNewPedido(this.request).subscribe(res => {

        this.apiResponse = res;
        this.update.emit({ resUpdate: true });

      });

    }

    else if (this.mission == "Editar Pedido") {


      this.service.updatePedido(this.request.id, this.request).subscribe(res => {

        this.apiResponse = res;


      });
    }
  }


}