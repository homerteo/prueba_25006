export interface Tarea {
    descripcion: string,
    tipo: 'laboral' | 'academica' | 'familiar' | 'hogar' | 'entretenimiento' | 'recreacion' | 'viaje',
    lugar: string,
    fecha: string,
    prioridad: 'alta' | 'media' | 'baja' | 'completada',
    observaciones: string,
    finalizada: boolean,
    id: number,
}

export interface TiposTarea {
    tipo: 'laboral' | 'academica' | 'familiar' | 'hogar' | 'entretenimiento' | 'recreacion' | 'viaje',
    descripcion: String,
    logo: string
}

export interface PrioridadesTarea {
    tipo: 'alta' | 'media' | 'baja' | 'completada',
    descipcion: string;
}