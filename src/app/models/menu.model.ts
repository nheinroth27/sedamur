export class Menu {
    nombre:string;
    redirect:string;
    items: Object;
    

    constructor(_nombre: string, _redirect: string, _items:Object){
        this.nombre = _nombre;
        this.redirect = _redirect;
        this.items = _items;

    }

}
