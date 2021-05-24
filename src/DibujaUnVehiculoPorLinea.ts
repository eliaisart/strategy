import { VistaVehiculo } from "./VistaVehiculo";

export class DibujaVehiculoPorLinea implements DibujaCatalogo{
    dibuja(contenido: Array<VistaVehiculo>){
        //muestra el contenido del array que se le pasa como parametro imprimiendo una separacion despues de cada vehiculo 
        for (let i=0; i < contenido.length; i++){
            console.log(contenido[i] + "\n");
            console.log(("----------------------"))
        }
    }
}