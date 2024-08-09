import {Component, OnInit} from '@angular/core';
import {NuevoUsuario} from '../../models/nuevo-usuario';
import {EmpleadoService} from '../../service/empleado.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrl: './detalle-empleado.component.css'
})
export class DetalleEmpleadoComponent implements OnInit {

  empleado: NuevoUsuario = null;

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
  ) {
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
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/empleado/lista']);
  }

}
