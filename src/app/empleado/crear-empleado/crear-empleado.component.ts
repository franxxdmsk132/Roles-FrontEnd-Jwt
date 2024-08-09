import {Component, OnInit} from '@angular/core';
import {EmpleadoService} from '../../service/empleado.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {NuevoUsuario} from '../../models/nuevo-usuario';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrl: './crear-empleado.component.css'
})
export class CrearEmpleadoComponent implements OnInit {
  nombre = '';
  nombreUsuario = '';
  email = '';
  password = '';

  constructor(private empleadoService: EmpleadoService,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  OnCreate(): void {
    const empleado = new NuevoUsuario(
      this.nombre,
      this.nombreUsuario,
      this.email,
      this.password);
    this.empleadoService.save(empleado).subscribe(
      data => {
        this.toastr.success('Empleado Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/empleado/lista']);
      },
      error => {
        this.toastr.error(error.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
