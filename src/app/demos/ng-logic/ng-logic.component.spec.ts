import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLogicComponent } from './ng-logic.component';

describe('NgLogicComponent', () => {
  let component: NgLogicComponent;
  let fixture: ComponentFixture<NgLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgLogicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
