import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Proyecto } from "../app/entities/proyecto";
import { ProyectoIdsDTO } from "../app/entities/proyecto-ids-dto";

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private _http: HttpClient) { }

  getProyectos(): Observable<Proyecto[]> {

    return this._http.get<Proyecto[]>("http://localhost:5200/api/Proyectos");
  }

  getProyectosIds(): Observable<ProyectoIdsDTO[]> {

    return this._http.get<ProyectoIdsDTO[]>("http://localhost:5200/api/Proyectos/idsDTO");
  }
}
