import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalBaseComponent } from 'src/app/core/components/modal-base/modal-base.component';

@Component({
  selector: 'app-modal-eliminar',
  imports: [ModalBaseComponent],
  templateUrl: './modal-eliminar.component.html',
  styleUrl: './modal-eliminar.component.scss'
})
export class ModalEliminarComponent {
  titulo: string = 'Eliminar tarea';
  texto: string = '¿Está seguro que desea eliminar la tarea seleccionada?';
  accion: string = 'Eliminar';

  private readonly activeModal = inject(NgbActiveModal);

  eliminar() {
    this.activeModal.close(true);
  }
}
