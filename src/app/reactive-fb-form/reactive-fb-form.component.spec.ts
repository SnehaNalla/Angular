import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFbFormComponent } from './reactive-fb-form.component';

describe('ReactiveFbFormComponent', () => {
  let component: ReactiveFbFormComponent;
  let fixture: ComponentFixture<ReactiveFbFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFbFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
