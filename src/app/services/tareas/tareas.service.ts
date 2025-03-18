import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Tarea } from 'src/app/core/interfaces/tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private tareasSubject = new BehaviorSubject<Tarea[]>([]);
  tareas$ = this.tareasSubject.asObservable();

  private tareas: Tarea[] = [];

  constructor() {
    this.tareas = [
      {
        descripcion: 'Tarea 1',
        tipo: 'laboral',
        lugar: 'Calle 44 #50-43',
        fecha: '14-03-2025',
        prioridad: 'alta',
        finalizada: false,
        observaciones: '',
        id: 0,
      },
      {
        descripcion: 'Tarea 2',
        tipo: 'familiar',
        lugar: 'Calle 44 #50-43',
        fecha: '14-03-2025',
        prioridad: 'alta',
        finalizada: false,
        observaciones: '',
        id: 1,
      },
      {
        descripcion: 'Tarea 3',
        tipo: 'hogar',
        lugar: 'Calle 44 #50-43',
        fecha: '14-03-2025',
        prioridad: 'alta',
        finalizada: false,
        observaciones: '',
        id: 2,
      },
      {
        descripcion: 'Tarea 4',
        tipo: 'academica',
        lugar: 'Calle 44 #50-43',
        fecha: '14-03-2025',
        prioridad: 'alta',
        finalizada: false,
        observaciones: '',
        id: 3,
      },
      {
        descripcion: 'Tarea 5',
        tipo: 'hogar',
        lugar: 'Calle 44 #50-43',
        fecha: '14-03-2025',
        prioridad: 'alta',
        finalizada: false,
        observaciones: '',
        id: 4,
      },
      {
        descripcion: 'Tarea 6',
        tipo: 'entretenimiento',
        lugar: 'Calle 44 #50-43',
        fecha: '14-03-2025',
        prioridad: 'alta',
        finalizada: false,
        observaciones: '',
        id: 5,
      },
      {
        descripcion: 'Tarea 7',
        tipo: 'viaje',
        lugar: 'Calle 44 #50-43',
        fecha: '14-03-2025',
        prioridad: 'alta',
        finalizada: false,
        observaciones: '',
        id: 6,
      },
      {
        descripcion: 'Tarea 8',
        tipo: 'recreacion',
        lugar: 'Calle 44 #50-43',
        fecha: '14-03-2025',
        prioridad: 'alta',
        finalizada: false,
        observaciones: '',
        id: 7
      },
    ];
    this.tareasSubject.next(this.tareas);
  }

  obtenerListaTareas(): Observable<Tarea[]> {
    return of(this.tareas)
  }

  crearTarea(tarea: Tarea) {
    this.tareas.push(tarea);
    this.tareasSubject.next(this.tareas);
  }

  editarTarea(tarea: Tarea) {
    const index = this.tareas.findIndex(t => t.id === tarea.id);
    if(index !== -1) {
      this.tareas[index] = {...tarea};
      this.tareasSubject.next(this.tareas);
    }
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
    this.tareasSubject.next(this.tareas);
  }

  completarTarea(id: number) {
    const index = this.tareas.findIndex(t => t.id === id);
    if(index !== -1) {
      this.tareas[index].finalizada = !this.tareas[index].finalizada;
      this.tareasSubject.next(this.tareas);
    }
  }
}
