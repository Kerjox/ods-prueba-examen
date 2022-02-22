import { Component, OnInit } from '@angular/core';
import { Pais } from "../entities/pais";
import { PaisesService } from "../../services/paises.service";

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: Pais[];


  constructor(private paisService: PaisesService) {

    this.paises = [];
  }

  ngOnInit(): void {

    this.paisService.getPaises().subscribe(request => {

      this.paises = request;
    });
  }

}
