import { Component, OnInit } from '@angular/core';
import { Proyecto } from "../entities/proyecto";
import { ProyectosService } from "../../services/proyectos.service";
import { ProyectoIdsDTO } from "../entities/proyecto-ids-dto";

@Component({
  selector: 'app-list-projects-filter01',
  templateUrl: './list-projects-filter01.component.html',
  styleUrls: ['./list-projects-filter01.component.css']
})
export class ListProjectsFilter01Component implements OnInit {

  proyectos: ProyectoIdsDTO[];
  proyectosToShow: ProyectoIdsDTO[];

  constructor(private proyectoService: ProyectosService) {

    this.proyectos = this.proyectosToShow = [];
  }

  ngOnInit(): void {

    this.proyectoService.getProyectosIds().subscribe(payload => {

      this.proyectos = this.proyectosToShow = payload;
    })
  }

  filter($event: any) {

    console.log($event);
    if ($event.idOds != -1) {

      this.proyectosToShow = this.proyectos.filter(p => p.idOds == $event.idOds);
    }

    if ($event.idDestinatario != -1) {

      this.proyectosToShow = this.proyectos.filter(p => p.idDestinatario == $event.idDestinatario);
    }

    if ($event.idOds != -1 && $event.idDestinatario != -1) {

      this.proyectosToShow = this.proyectos
        .filter(p => p.idOds == $event.idOds)
        .filter(p => p.idDestinatario == $event.idDestinatario);
    }

    if ($event.idOds == -1 && $event.idDestinatario == -1) {

      this.proyectosToShow = this.proyectos;
    }
  }
}
