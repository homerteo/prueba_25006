import { Component, inject, OnInit } from '@angular/core';
import { CardTareaComponent } from "../../components/card-tarea/card-tarea.component";
import { Tarea } from '../../core/interfaces/tarea.interface';
import { TareasService } from 'src/app/services/tareas/tareas.service';
@Component({
  selector: 'app-todo-app',
  imports: [CardTareaComponent],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.scss'
})
export class TodoAppComponent implements OnInit {
  tareas!: Tarea[];

  index: number = 0;

  private readonly _tareasService = inject(TareasService);

  ngOnInit(): void {
    this.consultarTareas();
  }

  consultarTareas() {
    this._tareasService.obtenerListaTareas().subscribe(response => {
      this.tareas = response;
    });
  }


}
