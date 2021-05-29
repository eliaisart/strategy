import { DibujaTresVehiculosPorLinea } from "./DibujaTresVehiculosPorLinea.js";
import { DibujaVehiculoPorLinea } from "./DibujaVehiculoPorLinea.js";
import { VistaCatalogo } from "./VistaCatalogo.js";
let vistacatalogo1 = new VistaCatalogo(new DibujaTresVehiculosPorLinea());
vistacatalogo1.dibuja();
let vistacatalogo2 = new VistaCatalogo(new DibujaVehiculoPorLinea());
vistacatalogo2.dibuja();
