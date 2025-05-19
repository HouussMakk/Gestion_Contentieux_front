import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesureDetailComponent } from './mesure-detail.component';

describe('MesureDetailComponent', () => {
  let component: MesureDetailComponent;
  let fixture: ComponentFixture<MesureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesureDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
