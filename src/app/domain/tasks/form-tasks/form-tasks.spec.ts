import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormTasks } from './form-tasks';

describe('FormTasks', () => {
  let component: FormTasks;
  let fixture: ComponentFixture<FormTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTasks],
    }).compileComponents();

    fixture = TestBed.createComponent(FormTasks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
