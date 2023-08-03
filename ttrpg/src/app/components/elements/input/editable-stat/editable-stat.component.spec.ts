import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableStatComponent } from './editable-stat.component';

describe('EditableStatComponent', () => {
  let component: EditableStatComponent;
  let fixture: ComponentFixture<EditableStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditableStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
