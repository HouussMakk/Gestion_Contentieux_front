import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesureListComponent } from './mesure-list.component';

describe('MesureListComponent', () => {
  let component: MesureListComponent;
  let fixture: ComponentFixture<MesureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesureListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
