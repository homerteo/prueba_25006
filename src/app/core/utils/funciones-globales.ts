import { CODIGO_PRIORIDADES } from "../constants/condigo-prioridades.constants";

export class FucionesGlobales {
    public establecerColorPrioridad(prioridad: keyof typeof CODIGO_PRIORIDADES): string {
        return CODIGO_PRIORIDADES[prioridad] || '';
    }
}