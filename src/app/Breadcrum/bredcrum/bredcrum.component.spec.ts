import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BredcrumComponent } from './bredcrum.component';

describe('BredcrumComponent', () => {
  let component: BredcrumComponent;
  let fixture: ComponentFixture<BredcrumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BredcrumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BredcrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
