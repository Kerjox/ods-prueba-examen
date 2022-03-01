import { Component, OnInit } from '@angular/core';
import { Proyecto } from "../entities/proyecto";

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[];

  constructor() {

    this.proyectos = [];
  }

  ngOnInit(): void {
  }

}
