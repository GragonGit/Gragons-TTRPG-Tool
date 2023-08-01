import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRoleComponent } from './profile-role.component';

describe('ProfileRoleComponent', () => {
  let component: ProfileRoleComponent;
  let fixture: ComponentFixture<ProfileRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
