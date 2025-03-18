import { CODIGO_PRIORIDADES } from "../constants/condigo-prioridades.constants";

export class FucionesGlobales {
    public establecerColorPrioridad(prioridad: keyof typeof CODIGO_PRIORIDADES, finalizada: boolean): string {
        if(finalizada) {
            return 'prioridad--completada'
        }
        return CODIGO_PRIORIDADES[prioridad] || '';
    }
}