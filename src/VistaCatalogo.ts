import { DibujaCatalogo } from "./DibujaCatalogo";
import { VistaVehiculo } from "./VistaVehiculo";

export class VistaCatalogo{
    protected arr_objects = new Array<VistaVehiculo>();
    protected object: DibujaCatalogo;

    constructor(dibuja : DibujaCatalogo){
        this.arr_objects.push(new VistaVehiculo("vehiculo económico"));
        this.arr_objects.push(new VistaVehiculo("vehiculo amplio"));
        this.arr_objects.push(new VistaVehiculo("vehiculo rápido"));
        this.arr_objects.push(new VistaVehiculo("vehiculo confortable"));
        this.arr_objects.push(new VistaVehiculo("vehiculo deportivo"));
        this.arr_objects.push(new VistaVehiculo("vehiculo pequeño"));
        this.object = dibuja;

    }

    dibuja(){
        this.object.dibuja(this.arr_objects);
    }
}