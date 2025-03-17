import { Component, Input } from '@angular/core';
import { Tarea } from '../../core/interfaces/tarea.interface';
import { FucionesGlobales } from 'src/app/core/utils/funciones-globales';
import { CommonModule } from '@angular/common';

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

  private readonly funcionesGlobales = new FucionesGlobales();


  establecerPrioridad(priorodad: 'alta' | 'media' | 'baja' | 'completada') {
    console.log(this.funcionesGlobales.establecerColorPrioridad(priorodad));
    return this.funcionesGlobales.establecerColorPrioridad(priorodad);
  }

}
