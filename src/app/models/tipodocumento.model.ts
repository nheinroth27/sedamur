export class Tipodocumento {
    id: number;
    descripcion:string;

    constructor(_id: number, _descripcion: string ){
        this.id = _id;
        this.descripcion = _descripcion;
    }
}
