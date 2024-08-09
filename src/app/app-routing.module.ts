import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListaProductoComponent} from './producto/Lista/lista-producto.component';
import {DetalleProductoComponent} from './producto/Detalle/detalle-producto.component';
import {NuevoProductoComponent} from './producto/Nuevo/nuevo-producto.component';
import {EditarProductoComponent} from './producto/Editar/editar-producto.component';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './auth/login.component';
import {RegistroComponent} from './auth/registro.component';
import {ProdGuardService as guard} from './guards/prod-guard.service';
import {ListarEmpleadoComponent} from './empleado/listar-empleado/listar-empleado.component';
import {CrearEmpleadoComponent} from './empleado/crear-empleado/crear-empleado.component';
import {EditarEmpleadoComponent} from './empleado/editar-empleado/editar-empleado.component';
import {DetalleEmpleadoComponent} from './empleado/detalle-empleado/detalle-empleado.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  // tslint:disable-next-line:max-line-length
  {path: 'lista', component: ListaProductoComponent, canActivate: [guard], data: {expectedRoles: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_EMPL']}},
  {
    path: 'detalle/:id',
    component: DetalleProductoComponent,
    canActivate: [guard],
    data: {expectedRoles: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_EMPL']}
  },
  {path: 'nuevo', component: NuevoProductoComponent, canActivate: [guard], data: {expectedRoles: ['ROLE_ADMIN', 'ROLE_EMPL']}},
  {path: 'editar/:id', component: EditarProductoComponent, canActivate: [guard], data: {expectedRoles: ['ROLE_ADMIN', 'ROLE_EMPL']}},
  // empleado
  {path: 'empleado/lista', component: ListarEmpleadoComponent, canActivate: [guard], data: {expectedRoles: ['ROLE_ADMIN']}},
  {path: 'empleado/nuevo', component: CrearEmpleadoComponent, canActivate: [guard], data: {expectedRoles: ['ROLE_ADMIN']}},
  {path: 'empleado/editar/:id', component: EditarEmpleadoComponent, canActivate: [guard], data: {expectedRoles: ['ROLE_ADMIN']}},
  {path: 'empleado/detalle/:id', component: DetalleEmpleadoComponent, canActivate: [guard], data: {expectedRoles: ['ROLE_ADMIN']}},


  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
