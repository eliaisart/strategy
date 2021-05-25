import { VistaVehiculo } from "./VistaVehiculo.js";

export interface DibujaCatalogo{
    dibuja(contenido: Array<VistaVehiculo>):void;
}