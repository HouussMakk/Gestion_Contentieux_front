import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesureFormComponent } from './mesure-form.component';

describe('MesureFormComponent', () => {
  let component: MesureFormComponent;
  let fixture: ComponentFixture<MesureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesureFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
