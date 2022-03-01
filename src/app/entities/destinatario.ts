export class Destinatario {

  id: number;
  nombreDestinatario: string;
  direccion: string;

  constructor(id: number, nombreDestinatario: string, direccion: string) {
    this.id = id;
    this.nombreDestinatario = nombreDestinatario;
    this.direccion = direccion;
  }
}
