import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Pais } from "../app/entities/pais";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private _http: HttpClient) { }

  getPaises(): Observable<Pais[]> {

    return this._http.get<Pais[]>("http://localhost:5200/api/Paises");
  }
}
