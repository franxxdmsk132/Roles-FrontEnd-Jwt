import {Component, OnInit} from '@angular/core';
import {NuevoUsuario} from '../../models/nuevo-usuario';
import {EmpleadoService} from '../../service/empleado.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {dateTimestampProvider} from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrl: './editar-empleado.component.css'
})
export class EditarEmpleadoComponent implements OnInit {

  empleado: NuevoUsuario = null;


  constructor(private empleadoService: EmpleadoService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService,) {

  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.empleadoService.detail(id).subscribe(
      data => {
        this.empleado = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.empleadoService.update(id, this.empleado).subscribe(
      data => {
        this.toastr.success('Empleado Actualizado', 'OK', {
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
