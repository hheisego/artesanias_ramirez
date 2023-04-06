import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ClientesComponent } from './components/clientes/clientes.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: DashboardComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'clientes', component: ClientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
