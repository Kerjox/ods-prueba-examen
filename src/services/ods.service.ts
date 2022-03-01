import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ODS } from "../app/entities/ods";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OdsService {

  constructor(private _http: HttpClient) {}

  getOdses(): Observable<ODS[]> {

    return this._http.get<ODS[]>("http://localhost:5200/api/ODS");
  }
}
