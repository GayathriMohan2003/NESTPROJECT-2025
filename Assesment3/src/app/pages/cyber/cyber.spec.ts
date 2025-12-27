import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cyber } from './cyber';

describe('Cyber', () => {
  let component: Cyber;
  let fixture: ComponentFixture<Cyber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cyber]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cyber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
