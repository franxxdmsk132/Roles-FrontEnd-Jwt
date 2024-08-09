import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './producto/Lista/lista-producto.component';
import { DetalleProductoComponent } from './producto/Detalle/detalle-producto.component';
import { NuevoProductoComponent } from './producto/Nuevo/nuevo-producto.component';
import { EditarProductoComponent } from './producto/Editar/editar-producto.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import {ListarEmpleadoComponent} from './empleado/listar-empleado/listar-empleado.component';
import {EditarEmpleadoComponent} from './empleado/editar-empleado/editar-empleado.component';
import {CrearEmpleadoComponent} from './empleado/crear-empleado/crear-empleado.component';
import {DetalleEmpleadoComponent} from './empleado/detalle-empleado/detalle-empleado.component';
import {RouterModule} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    ListarEmpleadoComponent,
    EditarEmpleadoComponent,
    CrearEmpleadoComponent,
    DetalleEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
