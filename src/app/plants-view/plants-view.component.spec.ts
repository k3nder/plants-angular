import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsViewComponent } from './plants-view.component';

describe('PlantsViewComponent', () => {
  let component: PlantsViewComponent;
  let fixture: ComponentFixture<PlantsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
