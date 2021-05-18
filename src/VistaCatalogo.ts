import { VistaVehiculo } from "./VistaVehiculo";

export class VistaCatalogo{
    protected arr_objects = new Array<VistaVehiculo>();
    protected object: DibujaCatalogo;

    constructor(new_Arr_obj = new Array<VistaVehiculo>()){
        new_Arr_obj.push(new VistaVehiculo("vehiculo económico"));
        new_Arr_obj.push(new VistaVehiculo("vehiculo amplio"));
        new_Arr_obj.push(new VistaVehiculo("vehiculo rápido"));
        new_Arr_obj.push(new VistaVehiculo("vehiculo confortable"));
        new_Arr_obj.push(new VistaVehiculo("vehiculo deportivo"));
        new_Arr_obj.push(new VistaVehiculo("vehiculo pequeño"));
        this.object = new_Arr_obj;
    }

    dibuja(){
        this.object.dibuja;
    }
}