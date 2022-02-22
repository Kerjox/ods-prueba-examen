export class Pais {

  id: number;
  nombrePais: string;
  banderaURL: string;

  constructor(id: number, nombrePais: string, banderaURL: string) {
    this.id = id;
    this.nombrePais = nombrePais;
    this.banderaURL = banderaURL;
  }
}
