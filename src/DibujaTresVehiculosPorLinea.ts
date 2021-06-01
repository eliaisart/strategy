import { VistaVehiculo } from "./VistaVehiculo.js";
import { DibujaCatalogo } from "./DibujaCatalogo.js";

export class DibujaTresVehiculosPorLinea implements DibujaCatalogo{
    dibuja(contenido: Array<VistaVehiculo>){
        console.log("Dibuja los vehiculos mostrando una separacion cada tres vehiculos");
        console.log("----------------------");

        let j = 0;
        for (let i=0; i < contenido.length; i++){
            contenido[i].dibuja();
            j++;
            if(j==3){
                console.log("----------------------");
                j=0;
            }
        }
        console.log("----------------------");
        console.log("FINAL DEL CATALOGO");
        console.log("");
    }
}