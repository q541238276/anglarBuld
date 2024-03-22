import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBindValComponent } from './input-bind-val.component';

describe('InputBindValComponent', () => {
  let component: InputBindValComponent;
  let fixture: ComponentFixture<InputBindValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBindValComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputBindValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
