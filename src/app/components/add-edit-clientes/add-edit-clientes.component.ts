import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-add-edit-clientes',
  templateUrl: './add-edit-clientes.component.html',
  styleUrls: ['./add-edit-clientes.component.scss']
})


export class AddEditClientesComponent implements OnInit {

  @Input() mission = '';
  @Input() customer: Cliente = new Cliente('', '', '', '', '', '', 0);
  @Output() update = new EventEmitter();
  apiResponse: any;


  constructor(private service: ClientesService) { }


  ngOnInit(): void {

    this.customer = this.customer;

  }


  onFormSubmit() {


    if (this.mission == "Agregar Cliente") {


      this.service.addNewCliente(this.customer).subscribe(res => {

        this.apiResponse = res;
        this.update.emit({ resUpdate: true });

      });

    }

    else if (this.mission == "Editar Cliente") {


      this.service.updateCliente(this.customer.id, this.customer).subscribe(res => {

        this.apiResponse = res;


      });
    }
  }


}