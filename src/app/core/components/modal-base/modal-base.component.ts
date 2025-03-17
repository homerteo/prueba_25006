import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-base',
  imports: [
    CommonModule
  ],
  templateUrl: './modal-base.component.html',
  styleUrl: './modal-base.component.scss'
})
export class ModalBaseComponent {
  @Input() titulo!: string;
  @Input() data!: any;
  @Input() accion!: string;

  activeModal = inject(NgbActiveModal);

  ngOnInit() {}
}
