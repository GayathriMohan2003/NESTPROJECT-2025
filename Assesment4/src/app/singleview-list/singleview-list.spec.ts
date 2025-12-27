import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleviewList } from './singleview-list';

describe('SingleviewList', () => {
  let component: SingleviewList;
  let fixture: ComponentFixture<SingleviewList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleviewList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleviewList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
