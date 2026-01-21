import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedJobsComponent } from './saved-jobs';

describe('SavedJobs', () => {
  let component: SavedJobsComponent;
  let fixture: ComponentFixture<SavedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedJobsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
