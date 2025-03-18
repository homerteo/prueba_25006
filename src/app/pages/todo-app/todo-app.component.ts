import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardTareaComponent } from "../../components/card-tarea/card-tarea.component";
import { Tarea } from '../../core/interfaces/tarea.interface';
import { TareasService } from 'src/app/services/tareas/tareas.service';
import { ToastService } from 'src/app/services/toast/toast.service'; 
import { ToastContainerComponent } from 'src/app/components/toast-container/toast-container.component'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormularioCreacionComponent } from 'src/app/components/formulario-creacion/formulario-creacion.component';
@Component({
  selector: 'app-todo-app',
  imports: [
    CardTareaComponent,
    ToastContainerComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.scss'
})
export class TodoAppComponent implements OnInit {
  tareas!: Tarea[];

  private readonly _tareasService = inject(TareasService);
  private readonly modalService = inject(NgbModal);
  _toastService = inject(ToastService);

  ngOnInit(): void {
    this.consultarTareas();
  }

  consultarTareas() {
    this._tareasService.obtenerListaTareas().subscribe(response => {
      this.tareas = response;
    });
  }

  tareaEliminada(template: TemplateRef<any>) {
    this.consultarTareas();
    this._toastService.show({ template, classname: 'bg-danger text-light', delay: 10000 });
  }

  editarTarea(tarea: Tarea) {
    const modalRef = this.modalService.open(FormularioCreacionComponent);
    modalRef.componentInstance.esEditar = true;
    modalRef.componentInstance.tarea = tarea;
  }
}
