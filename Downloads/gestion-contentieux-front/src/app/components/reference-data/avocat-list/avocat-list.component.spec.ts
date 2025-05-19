import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvocatListComponent } from './avocat-list.component';

describe('AvocatListComponent', () => {
  let component: AvocatListComponent;
  let fixture: ComponentFixture<AvocatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvocatListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvocatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
