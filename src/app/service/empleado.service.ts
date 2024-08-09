import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NuevoUsuario} from '../models/nuevo-usuario';
import {Producto} from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  empleadoUrl = 'http://localhost:8080/auth/';

constructor(private http: HttpClient) {}
  public listar():Observable<NuevoUsuario[]> {
  return this.http.get<NuevoUsuario[]>(this.empleadoUrl + 'empleados');
  }
  public save(empleado: NuevoUsuario):Observable<any> {
    return this.http.post<any>(this.empleadoUrl + 'nuevoEmpleado',empleado);
  }
  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.empleadoUrl + `empleado/${id}`);
  }
  public detail(id: number): Observable<NuevoUsuario> {
    return this.http.get<NuevoUsuario>(this.empleadoUrl + `empleado/${id}`);
  }
  public update(id: number, empleado: NuevoUsuario): Observable<any> {
    return this.http.put<any>(this.empleadoUrl + `empleado/${id}`, empleado);
  }
}


