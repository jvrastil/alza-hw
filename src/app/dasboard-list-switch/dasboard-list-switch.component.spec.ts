import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardListSwitchComponent } from './dasboard-list-switch.component';

describe('DasboardListSwitchComponent', () => {
  let component: DasboardListSwitchComponent;
  let fixture: ComponentFixture<DasboardListSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardListSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardListSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
