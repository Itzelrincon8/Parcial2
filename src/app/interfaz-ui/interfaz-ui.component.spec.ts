import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazUIComponent } from './interfaz-ui.component';

describe('InterfazUIComponent', () => {
  let component: InterfazUIComponent;
  let fixture: ComponentFixture<InterfazUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfazUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
