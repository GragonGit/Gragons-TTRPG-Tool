import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCharacterCardComponent } from './new-character-card.component';

describe('NewCharacterCardComponent', () => {
  let component: NewCharacterCardComponent;
  let fixture: ComponentFixture<NewCharacterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCharacterCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
