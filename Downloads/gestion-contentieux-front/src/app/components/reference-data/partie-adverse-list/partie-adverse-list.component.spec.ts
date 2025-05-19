import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartieAdverseListComponent } from './partie-adverse-list.component';

describe('PartieAdverseListComponent', () => {
  let component: PartieAdverseListComponent;
  let fixture: ComponentFixture<PartieAdverseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartieAdverseListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartieAdverseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
