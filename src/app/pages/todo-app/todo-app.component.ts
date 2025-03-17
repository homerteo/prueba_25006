import { Component, inject } from '@angular/core';
import { CardTareaComponent } from "../../components/card-tarea/card-tarea.component";
import { Tarea } from '../../core/interfaces/tarea.interface';
@Component({
  selector: 'app-todo-app',
  imports: [CardTareaComponent],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.scss'
})
export class TodoAppComponent {
  tarea: Tarea = {
    descripcion: 'hacer prueba tecnica',
    tipo: 'laboral',
    lugar: 'Calle 44 #50-43',
    fecha: '14/03/2025',
    prioridad: 'alta',
    finalizada: false,
    observaciones: ''
  }

  index: number = 0;


}
