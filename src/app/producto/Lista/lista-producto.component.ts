import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../service/producto.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];
  roles: string[];
  isAdmin = false;
  isEmpl = false;
  searchNombre= '';
  searchCategoria = '';
  searchTalla: number = null;
  productosFiltrados: Producto[] = [];



  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.buscar();
    this.cargarProductos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
      if (rol === 'ROLE_EMPL') {
        this.isEmpl = true;
      }
    });
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
        this.productosFiltrados = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  buscar(): void {
    this.productosFiltrados = this.productos.filter(p => {
      const matchesNombre = this.searchNombre ? p.nombre.toLowerCase().includes(this.searchNombre.toLowerCase()) : true;
      const matchesCategoria = this.searchCategoria ? p.categoria.toLowerCase().includes(this.searchCategoria.toLowerCase()) : true;
      const matchesTalla = this.searchTalla != null ? p.talla === this.searchTalla : true;
      // const matchesPrecio = this.searchPrecio != null ? p.precio === this.searchPrecio : true;

      return matchesNombre && matchesCategoria && matchesTalla;
    });

    if (this.productosFiltrados.length === 0 && this.productos.length > 0) {
      this.toastr.info('No se encontraron productos con esas características.', 'Sin resultados', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
    }
  }


  limpiarFiltros(): void {
    this.searchNombre = '';
    this.searchCategoria = '';
    this.searchTalla = null;
    this.productosFiltrados = this.productos;
  }

  borrar(id: number) {
    this.productoService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProductos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
