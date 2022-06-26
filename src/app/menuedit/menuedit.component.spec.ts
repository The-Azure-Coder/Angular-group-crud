import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenueditComponent } from './menuedit.component';

describe('MenueditComponent', () => {
  let component: MenueditComponent;
  let fixture: ComponentFixture<MenueditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenueditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenueditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
