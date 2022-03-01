import { Proyecto } from "./proyecto";


export class ProyectoIdsDTO extends Proyecto {

  idOds: number
  idDestinatario: number

  constructor(id: number, nombreProyecto: string, fechaInicio: Date, idOds: number, idDestinatario: number) {
    super(id, nombreProyecto, fechaInicio);
    this.idOds = idOds;
    this.idDestinatario = idDestinatario;
  }
}
