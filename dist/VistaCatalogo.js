import { VistaVehiculo } from "./VistaVehiculo.js";
export class VistaCatalogo {
    constructor(dibuja) {
        this.arr_objects = new Array();
        this.arr_objects.push(new VistaVehiculo("vehiculo económico"));
        this.arr_objects.push(new VistaVehiculo("vehiculo amplio"));
        this.arr_objects.push(new VistaVehiculo("vehiculo rápido"));
        this.arr_objects.push(new VistaVehiculo("vehiculo confortable"));
        this.arr_objects.push(new VistaVehiculo("vehiculo deportivo"));
        this.arr_objects.push(new VistaVehiculo("vehiculo pequeño"));
        this.arr_objects.push(new VistaVehiculo("vehiculo inteligente"));
        this.arr_objects.push(new VistaVehiculo("vehiculo invisible"));
        this.object = dibuja;
    }
    dibuja() {
        this.object.dibuja(this.arr_objects);
    }
}
