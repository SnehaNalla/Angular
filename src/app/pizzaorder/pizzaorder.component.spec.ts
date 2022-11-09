import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaorderComponent } from './pizzaorder.component';

describe('PizzaorderComponent', () => {
  let component: PizzaorderComponent;
  let fixture: ComponentFixture<PizzaorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
