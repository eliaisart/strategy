import { DibujaTresVehiculosPorLinea } from "./DibujaTresVehiculosPorLinea";
import { DibujaVehiculoPorLinea } from "./DibujaVehiculoPorLinea";
import { VistaCatalogo } from "./VistaCatalogo";

let vistacatalogo1=new VistaCatalogo (new DibujaTresVehiculosPorLinea());
vistacatalogo1.dibuja ();
let vistacatalogo2 = new VistaCatalogo(new DibujaVehiculoPorLinea ());
vistacatalogo2.dibuja ();
