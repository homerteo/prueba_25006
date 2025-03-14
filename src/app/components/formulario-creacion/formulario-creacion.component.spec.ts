import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCreacionComponent } from './formulario-creacion.component';

describe('FormularioCreacionComponent', () => {
  let component: FormularioCreacionComponent;
  let fixture: ComponentFixture<FormularioCreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCreacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
