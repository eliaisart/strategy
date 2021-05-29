export class DibujaVehiculoPorLinea {
    dibuja(contenido) {
        //muestra el contenido del array que se le pasa como parametro imprimiendo una separacion despues de cada vehiculo 
        for (let i = 0; i < contenido.length; i++) {
            console.log(contenido[i].dibuja() + "\n");
            console.log(("----------------------"));
        }
    }
}
