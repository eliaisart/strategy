import { DibujaCatalogo } from "./DibujaCatalogo";
import { VistaVehiculo } from "./VistaVehiculo";

export class DibujaVehiculoPorLinea implements DibujaCatalogo{
    dibuja(contenido: Array<VistaVehiculo>){
        console.log("Dibuja los vehiculos mostrando una separacion cada  vehiculo");
        for (let i=0; i < contenido.length; i++){
            contenido[i].dibuja();
            console.log(("----------------------"))
        }    
        console.log("FINAL DEL CATALOGO");
    }

}