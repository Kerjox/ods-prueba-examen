export class ODS {

  id: number;
  nombreOds: string;
  fotoURL: string;

  constructor(id: number, nombreOds: string, fotoURL: string) {
    this.id = id;
    this.nombreOds = nombreOds;
    this.fotoURL = fotoURL;
  }
}
