import { VistaVehiculo } from "./VistaVehiculo";

export class DibujaVehiculoPorLinea implements DibujaCatalogo{
    dibuja(contenido: Array<VistaVehiculo>){
        //imprime tres vehiculos seguidos y despues una separacion 
        for (let i=0; i < contenido.length; i++){
            let j;
            for(j=0; j <= 2; j++){
                console.log(contenido[i] + "\n");
            }
            console.log("----------------------");
        }
    }
}