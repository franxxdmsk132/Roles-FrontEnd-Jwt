import {Component, OnInit} from '@angular/core';
import {NuevoUsuario} from '../../models/nuevo-usuario';
import {EmpleadoService} from '../../service/empleado.service';
import {ToastrService} from 'ngx-toastr';
import {TokenService} from '../../service/token.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrl: './listar-empleado.component.css'
})
export class ListarEmpleadoComponent implements OnInit {

  empleados: NuevoUsuario[] = [];
  roles: string[];
  isAdmin = false;
  isEmpl = false;

  constructor(private empleadoService: EmpleadoService,
              private toastr: ToastrService,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.cargarEmpleado();
  }

  cargarEmpleado(): void {
    this.empleadoService.listar().subscribe(
      data => {
        this.empleados = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.empleadoService.delete(id).subscribe(
      data => {
        this.toastr.success('Empleado Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarEmpleado();
      },
      error => {
        this.toastr.error('Empleado Eliminado', 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
