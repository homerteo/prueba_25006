import { Component, EventEmitter, inject, Input, OnDestroy, Output, TemplateRef } from '@angular/core';
import { Tarea } from '../../core/interfaces/tarea.interface';
import { FucionesGlobales } from 'src/app/core/utils/funciones-globales';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';
import { FormularioCreacionComponent } from '../formulario-creacion/formulario-creacion.component';
import { TareasService } from 'src/app/services/tareas/tareas.service';
import { ToastService } from 'src/app/services/toast/toast.service'; 
import { ToastContainerComponent } from '../toast-container/toast-container.component'; 

@Component({
  selector: 'app-card-tarea',
  imports: [
    CommonModule,
    ToastContainerComponent
  ],
  templateUrl: './card-tarea.component.html',
  styleUrl: './card-tarea.component.scss'
})
export class CardTareaComponent implements OnDestroy {
  @Input() tarea!: Tarea;
  @Output() refrescar = new EventEmitter();
  @Output() editar = new EventEmitter<Tarea>()

  private readonly funcionesGlobales = new FucionesGlobales();
  private readonly _tareasService = inject(TareasService);
  private readonly _modalService = inject(NgbModal);
  _toastService = inject(ToastService);

  ngOnDestroy(): void {
    this._toastService.clear();
  }

  establecerPrioridad(priorodad: 'alta' | 'media' | 'baja' | 'completada', finalizada: boolean) {
    return this.funcionesGlobales.establecerColorPrioridad(priorodad, finalizada);
  }

  establecerIconoTipo(tipo: 'laboral' | 'academica' | 'familiar' | 'hogar' | 'entretenimiento' | 'recreacion' | 'viaje' | '') {
    switch (tipo) {
      case 'laboral':
        return 'bi bi-hammer'
        break;
      case 'academica':
        return 'bi bi-laptop'
        break;
      case 'familiar':
        return 'bi bi-person-heart'
        break;
      case 'hogar':
        return 'bi bi-house-heart-fill'
        break;
      case 'entretenimiento':
        return 'bi bi bi-controller'
        break;
      case 'recreacion':
        return 'bi bi-balloon-fill'
        break;
      case 'viaje':
        return 'bi bi-luggage-fill'
        break;
      default:
        return 'bi bi-laptop';
        break;
    }
  }

  establecerColorFinalizada() {
    return this.tarea.finalizada ? 'text__clrcompletada' : 'text__clrblanco'
  }

  abrirModalEliminar(index: number) {
    const modalRef = this._modalService.open(ModalEliminarComponent);
    modalRef.result.then((result: boolean) => {
      if(result) {
        this._tareasService.eliminarTarea(index);
        this.refrescar.emit();
      }
    })
  }

  toggleFinalizarTarea(index: number, template: TemplateRef<any>) {
    this._tareasService.completarTarea(index);
    this._toastService.show({template: template, classname: 'bg-success text-light', delay: 10000})
  }

  abrirEditarTarea(tarea: Tarea) {
    this.editar.emit(tarea);
  }
}
