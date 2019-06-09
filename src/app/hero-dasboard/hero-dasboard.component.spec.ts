import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDasboardComponent } from './hero-dasboard.component';

describe('HeroDasboardComponent', () => {
  let component: HeroDasboardComponent;
  let fixture: ComponentFixture<HeroDasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
