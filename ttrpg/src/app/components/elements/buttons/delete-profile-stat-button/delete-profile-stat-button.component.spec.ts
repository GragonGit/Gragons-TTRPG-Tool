import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProfileStatButtonComponent } from './delete-profile-stat-button.component';

describe('DeleteProfileStatButtonComponent', () => {
  let component: DeleteProfileStatButtonComponent;
  let fixture: ComponentFixture<DeleteProfileStatButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProfileStatButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProfileStatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
