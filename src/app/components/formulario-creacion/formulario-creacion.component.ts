import { Component, inject, Input } from '@angular/core';
import { ModalBaseComponent } from "../../core/components/modal-base/modal-base.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrioridadesTarea, Tarea, TiposTarea } from 'src/app/core/interfaces/tarea.interface';
import { NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-creacion',
  imports: [
    ModalBaseComponent,
    ReactiveFormsModule,
    NgbDatepickerModule, 
    CommonModule
  ],
  templateUrl: './formulario-creacion.component.html',
  styleUrl: './formulario-creacion.component.scss'
})
export class FormularioCreacionComponent {
  @Input() cabeceraModal: string = 'Crear tarea';
  @Input() tarea!: Tarea; 
  @Input() esEditar: boolean = false;
  formularioTareas!: FormGroup;
  ltsTiposTarea: TiposTarea[] = [
    {
      tipo: 'laboral',
      descripcion: 'Laboral',
      logo: 'bi bi-hammer'
    },
    {
      tipo: 'academica',
      descripcion: 'Academica',
      logo: 'bi bi-laptop'
    },
    {
      tipo: 'familiar',
      descripcion: 'Familiar',
      logo: 'bi bi-person-heart'
    },
    {
      tipo: 'hogar',
      descripcion: 'Hogar',
      logo: 'bi bi-house-heart-fill'
    },
    {
      tipo: 'entretenimiento',
      descripcion: 'Entretenimiento',
      logo: 'bi bi bi-controller'
    },
    {
      tipo: 'recreacion',
      descripcion: 'Recreación',
      logo: 'bi bi-balloon-fill'
    },
    {
      tipo: 'viaje',
      descripcion: 'Viaje',
      logo: 'bi bi-luggage-fill'
    },
  ];

  ltsPrioridades: PrioridadesTarea[] = [
    {
      tipo: 'alta',
      descipcion: 'Alta',
    },
    {
      tipo: 'media',
      descipcion: 'Media',
    },
    {
      tipo: 'baja',
      descipcion: 'Baja',
    },
    {
      tipo: 'completada',
      descipcion: 'Completada',
    }
  ]

  private readonly _fb = inject(FormBuilder);

  constructor() {
    this.formularioTareas = this._fb.group({
      descripcion: [null, Validators.required],
      fecha: [null, Validators.required],
      lugar: [''],
      prioridad: [null, Validators.required],
      tipo: [null, Validators.required],
      observaciones: ['']
    })
  }

  crearObjetoCrearEditarTarea(): Tarea {
    const fechaTarea = this.formularioTareas.get('fecha')?.value;
    return {
      descripcion: this.formularioTareas.get('descripcion')?.value,
      fecha: `${fechaTarea.year}-${fechaTarea.month}-${fechaTarea.day}`,
      lugar: this.formularioTareas.get('lugar')?.value,
      prioridad: this.formularioTareas.get('prioridad')?.value,
      tipo: this.formularioTareas.get('tipo')?.value,
      observaciones: this.formularioTareas.get('observaciones')?.value,
      finalizada: false,
    }
  }

  crearEditarTarea() {
    const obj = this.crearObjetoCrearEditarTarea();
    console.log(obj);
  }

}
