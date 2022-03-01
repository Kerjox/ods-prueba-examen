import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Destinatario } from "../app/entities/destinatario";

@Injectable({
  providedIn: 'root'
})
export class DestinatarioService {

  constructor(private _http:HttpClient) { }

  getDestinatarios(): Observable<Destinatario[]> {

    return this._http.get<Destinatario[]>("http://localhost:5200/api/Destinatarios");
  }
}
