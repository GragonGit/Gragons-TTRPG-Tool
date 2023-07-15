import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListElementComponent } from './character-list-element.component';

describe('CharacterListElementComponent', () => {
  let component: CharacterListElementComponent;
  let fixture: ComponentFixture<CharacterListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterListElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
