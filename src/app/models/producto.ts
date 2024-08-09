export class Producto {
  id?: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  talla: number;
  estado: boolean;
  precio: number;


  constructor(nombre: string, categoria: string, descripcion: string, talla: number, estado: boolean, precio: number) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.talla = talla;
    this.estado = estado;
    this.precio = precio;
  }
}


