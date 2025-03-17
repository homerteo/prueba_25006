export interface Tarea {
    descricion: string,
    tipo: 'laboral' | 'academica' | 'familiar' | 'hogar' | 'entretenimiento' | 'recreacion' | 'viaje',
    lugar: string,
    fecha: string,
    prioridad: 'alta' | 'media' | 'baja' | 'completada',
    finalizada: boolean
}