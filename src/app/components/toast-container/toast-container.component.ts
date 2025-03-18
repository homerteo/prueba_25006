import { Component, inject } from '@angular/core';

import { ToastService } from 'src/app/services/toast/toast.service'; 
import { NgTemplateOutlet } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toasts',
  imports: [NgTemplateOutlet, NgbToastModule],
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.scss',
  host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },
})
export class ToastContainerComponent {
  toastService = inject(ToastService);
}
