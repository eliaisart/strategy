export class DibujaTresVehiculosPorLinea {
    dibuja(contenido) {
        //imprime lista vehiculos seguidos y cada 3 una separacion 
        console.log("Dibuja los vehiculos mostrando una separacion cada tres vehiculos");
        let j = 0;
        for (let i = 0; i < contenido.length; i++) {
            contenido[i].dibuja();
            j++;
            if (j == 3) {
                console.log("----------------------");
                j = 0;
            }
            /*

            if(i==2){
                console.log("----------------------");
                i=2;
            }

            */
            /*
            for(let j=0; j <= 2; j++){
                //console.log(contenido[j].dibuja() + "\n");
                console.log("----------------------");
            }
            */
        }
        console.log("---------------FINAL DEL CATALOGO---------------");
    }
}
