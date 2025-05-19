import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadeLitigeListComponent } from './stade-litige-list.component';

describe('StadeLitigeListComponent', () => {
  let component: StadeLitigeListComponent;
  let fixture: ComponentFixture<StadeLitigeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StadeLitigeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StadeLitigeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
