import { Component, inject, Input, OnInit } from '@angular/core';
import { ModalBaseComponent } from "../../core/components/modal-base/modal-base.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrioridadesTarea, Tarea, TiposTarea } from 'src/app/core/interfaces/tarea.interface';
import { NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { DominiosService } from 'src/app/services/dominios/dominios.service';

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
