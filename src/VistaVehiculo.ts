export class VistaVehiculo{
    
    protected descr: string;

    constructor(desc: string){
        this.descr = desc;
    }

    dibuja(){
        console.log(this.descr);
    }
}