import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ODS } from "../../entities/ods";
import { Destinatario } from "../../entities/destinatario";
import { OdsService } from "../../../services/ods.service";
import { DestinatarioService } from "../../../services/destinatario.service";

@Component({
  selector: 'app-filter01',
  templateUrl: './filter01.component.html',
  styleUrls: ['./filter01.component.css']
})
export class Filter01Component implements OnInit {

  odses: ODS[];
  destinatarios: Destinatario[];

  @Input()
  idOdse: number;

  @Input()
  idDestinatario: number;

  @Output()
  somethingSelected: EventEmitter<any>;

  constructor(
    private odsService: OdsService,
    private destinaratioService: DestinatarioService) {


    this.idOdse = this.idDestinatario = -1;
    this.odses = [];
    this.destinatarios = [];
    this.somethingSelected = new EventEmitter<any>();
  }

  ngOnInit(): void {

    this.odsService.getOdses().subscribe(payload => {

      this.odses = payload;
    })

    this.destinaratioService.getDestinatarios().subscribe(payload => {

      this.destinatarios = payload;
    })
  }

  filter(): void {

    let data = {
      'idOds': -1,
      'idDestinatario': -1
    }

    if (this.idOdse != -1) {

      data.idOds = this.idOdse;
    }

    if (this.idDestinatario != -1) {

      data.idDestinatario = this.idDestinatario;
    }

    this.somethingSelected.emit(data);
  }

}
