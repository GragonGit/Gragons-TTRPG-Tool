import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCharacterButtonComponent } from './delete-character-button.component';

describe('DeleteCharacterButtonComponent', () => {
  let component: DeleteCharacterButtonComponent;
  let fixture: ComponentFixture<DeleteCharacterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCharacterButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCharacterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
