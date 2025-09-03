import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildsettingComponent } from './childsetting.component';

describe('ChildsettingComponent', () => {
  let component: ChildsettingComponent;
  let fixture: ComponentFixture<ChildsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildsettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
