import { VistaVehiculo } from "./VistaVehiculo";

export class VistaCatalogo{
    protected arr_objects = new Array<VistaVehiculo>();
    protected object: DibujaCatalogo;

    constructor(new_Arr_obj = new Array<VistaVehiculo>()){
        this.arr_objects.push(new VistaVehiculo("vehiculo económico"));
        this.arr_objects.push(new VistaVehiculo("vehiculo amplio"));
        this.arr_objects.push(new VistaVehiculo("vehiculo rápido"));
        this.arr_objects.push(new VistaVehiculo("vehiculo confortable"));
        this.arr_objects.push(new VistaVehiculo("vehiculo deportivo"));
        this.arr_objects.push(new VistaVehiculo("vehiculo pequeño"));
    
        //this.object = new_Arr_obj;

    }

    dibuja(){
        this.object.dibuja;
    }
}