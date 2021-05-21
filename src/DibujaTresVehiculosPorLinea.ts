import { VistaVehiculo } from "./VistaVehiculo";

export class DibujaVehiculoPorLinea implements DibujaCatalogo{
    dibuja(contenido: Array<VistaVehiculo>){
        //imprime tres vehiculos seguidos y despues una separacion 
        for (let i=0; i < contenido.length; i++){
            console.log(contenido[i] + "\n");
        }
    }
}