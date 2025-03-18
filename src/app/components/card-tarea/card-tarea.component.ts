import { Component, inject, Input } from '@angular/core';
import { Tarea } from '../../core/interfaces/tarea.interface';
import { FucionesGlobales } from 'src/app/core/utils/funciones-globales';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';
import { FormularioCreacionComponent } from '../formulario-creacion/formulario-creacion.component';
import { TareasService } from 'src/app/services/tareas/tareas.service';

@Component({
  selector: 'app-card-tarea',
  imports: [
    CommonModule
  ],
  templateUrl: './card-tarea.component.html',
  styleUrl: './card-tarea.component.scss'
})
export class CardTareaComponent {
  @Input() tarea!: Tarea;
  @Input() index!: number;

  private readonly funcionesGlobales = new FucionesGlobales();
  private readonly _tareasService = inject(TareasService);
  private readonly modalService = inject(NgbModal);


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
    const modalRef = this.modalService.open(ModalEliminarComponent);
    modalRef.result.then((result: boolean) => {
      if(result) {
        console.log('Eliminar ', index);
      }
    })
  }

  abrirEditarTarea(tarea: Tarea) {
    const modalRef = this.modalService.open(FormularioCreacionComponent);
  }

  toggleFinalizarTarea(index: number) {
    this._tareasService.completarTarea(index);
  }
}
