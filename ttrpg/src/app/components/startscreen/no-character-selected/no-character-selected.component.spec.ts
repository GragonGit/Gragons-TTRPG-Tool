import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCharacterSelectedComponent } from './no-character-selected.component';

describe('NoCharacterSelectedComponent', () => {
  let component: NoCharacterSelectedComponent;
  let fixture: ComponentFixture<NoCharacterSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCharacterSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoCharacterSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
