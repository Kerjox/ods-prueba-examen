export class Proyecto {

  id: number;
  nombreProyecto: string;
  fechaInicio: Date;

  constructor(id: number, nombreProyecto: string, fechaInicio: Date) {
    this.id = id;
    this.nombreProyecto = nombreProyecto;
    this.fechaInicio = fechaInicio;
  }
}
