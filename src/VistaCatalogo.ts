import { VistaVehiculo } from "./VistaVehiculo";

export class VistaCatalogo{
    protected arr_objects = new Array<VistaVehiculo>();
    protected object: DibujaCatalogo;

    constructor(){
        this.arr_objects.push(new VistaVehiculo("vehiculo económico"));
        this.arr_objects.push(new VistaVehiculo("vehiculo amplio"));
        this.arr_objects.push(new VistaVehiculo("vehiculo rápido"));
        this.arr_objects.push(new VistaVehiculo("vehiculo confortable"));
        this.arr_objects.push(new VistaVehiculo("vehiculo deportivo"));
        this.arr_objects.push(new VistaVehiculo("vehiculo pequeño"));
        this.object = this.arr_objects;

    }

    dibuja(){
        this.object.dibuja;
    }
}