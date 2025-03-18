import { Component, inject, Input, OnInit } from '@angular/core';
import { ModalBaseComponent } from "../../core/components/modal-base/modal-base.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrioridadesTarea, Tarea, TiposTarea } from 'src/app/core/interfaces/tarea.interface';
import { NgbActiveModal, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { DominiosService } from 'src/app/services/dominios/dominios.service';
import { TareasService } from 'src/app/services/tareas/tareas.service';

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
export class FormularioCreacionComponent implements OnInit {
  @Input() cabeceraModal: string = 'Crear tarea';
  @Input() tarea!: Tarea; 
  @Input() esEditar: boolean = false;
  formularioTareas!: FormGroup;
  ltsTiposTarea!: TiposTarea[];
  ltsPrioridades!: PrioridadesTarea[];

  private readonly _fb = inject(FormBuilder);
  private readonly _dominiosService = inject(DominiosService);
  private readonly _tareasService = inject(TareasService);
  private readonly _activeModal = inject(NgbActiveModal);

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

  ngOnInit(): void {
    this.consultarTipos();
    this.consultarPrioridades();
    if(this.esEditar) {
      this.llenarFormularioTareas();
    }
  }

  consultarTipos() {
    this._dominiosService.consultarTipos().subscribe(response => {
      this.ltsTiposTarea = response;
    })
  }

  consultarPrioridades() {
    this._dominiosService.consultarPrioridades().subscribe(response => {
      this.ltsPrioridades = response;
    })
  }

  llenarFormularioTareas() {
    console.log(this.tarea.fecha);
    const fecha = this.tarea.fecha.split('-');
    console.log(fecha)
    this.formularioTareas.patchValue({
      descripcion: this.tarea.descripcion,
      fecha: {year: Number(fecha[2]), month: Number(fecha[1]), day: Number(fecha[0])},
      lugar: this.tarea.lugar,
      prioridad: this.tarea.prioridad,
      tipo: this.tarea.tipo,
      observacion: this.tarea.observaciones,
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
      id: 0
    }
  }

  crearEditarTarea() {
    const obj = this.crearObjetoCrearEditarTarea();
    console.log(obj);
    if(this.esEditar) {
      this._tareasService.editarTarea(obj);
      this._activeModal.close();
      return;
    }
    this._tareasService.crearTarea(obj);
    return;
  }

}
