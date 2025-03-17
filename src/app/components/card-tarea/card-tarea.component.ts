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

  establecerIconoTipo(tipo: 'laboral' | 'academica' | 'familiar' | 'hogar' | 'entretenimiento' | 'recreacion' | 'viaje') {
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

  /*                     @if (tarea.tipo === 'laboral') {
                        <p><em class="bi bi-hammer "></em></p>
                    } @else if (tarea.tipo === 'academica') {
                        <p><em class="bi bi-laptop"></em></p>
                    } @else if (tarea.tipo === 'familiar') {
                        <p><em class="bi bi-person-heart"></em></p>
                    } @else if (tarea.tipo === 'hogar') {
                        <p><em class="bi bi-house-heart-fill"></em></p>
                    } @else if (tarea.tipo === 'entretenimiento') {
                        <p><em class="bi bi-controller"></em></p>
                    } @else if (tarea.tipo === 'recreacion') {
                        <p><em class="bi bi-balloon-fill"></em></p>
                    } @else if (tarea.tipo === 'viaje') {
                        <p><em class="bi bi-luggage-fill"></em></p>
                    } */
}
