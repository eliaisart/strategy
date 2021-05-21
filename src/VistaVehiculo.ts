export class VistaVehiculo{
    
    protected descripcion: string;

    constructor(desc: string){
        this.descripcion = desc;
    }

    dibuja(){
        console.log(this.descripcion);
    }
}