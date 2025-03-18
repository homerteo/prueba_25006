import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PrioridadesTarea, TiposTarea } from 'src/app/core/interfaces/tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class DominiosService {

  constructor() { }

  consultarTipos(): Observable<TiposTarea[]> {
    return of([
      {
        tipo: 'laboral',
        descripcion: 'Laboral',
        logo: 'bi bi-hammer'
      },
      {
        tipo: 'academica',
        descripcion: 'Academica',
        logo: 'bi bi-laptop'
      },
      {
        tipo: 'familiar',
        descripcion: 'Familiar',
        logo: 'bi bi-person-heart'
      },
      {
        tipo: 'hogar',
        descripcion: 'Hogar',
        logo: 'bi bi-house-heart-fill'
      },
      {
        tipo: 'entretenimiento',
        descripcion: 'Entretenimiento',
        logo: 'bi bi bi-controller'
      },
      {
        tipo: 'recreacion',
        descripcion: 'Recreación',
        logo: 'bi bi-balloon-fill'
      },
      {
        tipo: 'viaje',
        descripcion: 'Viaje',
        logo: 'bi bi-luggage-fill'
      },
    ])
  }

  consultarPrioridades(): Observable<PrioridadesTarea[]> {
    return of([
      {
        tipo: 'alta',
        descipcion: 'Alta',
      },
      {
        tipo: 'media',
        descipcion: 'Media',
      },
      {
        tipo: 'baja',
        descipcion: 'Baja',
      },
      {
        tipo: 'completada',
        descipcion: 'Completada',
      }
    ])
  }
}
