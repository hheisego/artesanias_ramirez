import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'; 



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { TiendaListComponent } from './components/tienda-list/tienda-list.component';
import { AddEditPedidoComponent } from './components/add-edit-pedido/add-edit-pedido.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';
import { AddEditClientesComponent } from './components/add-edit-clientes/add-edit-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    NavbarComponent,
    DashboardComponent,
    TiendaComponent,
    TiendaListComponent,
    AddEditPedidoComponent,
    ClientesComponent,
    ClientesListComponent,
    AddEditClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
