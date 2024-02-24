import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCharacterButtonComponent } from './new-character-button.component';

describe('NewCharacterButtonComponent', () => {
  let component: NewCharacterButtonComponent;
  let fixture: ComponentFixture<NewCharacterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCharacterButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCharacterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
