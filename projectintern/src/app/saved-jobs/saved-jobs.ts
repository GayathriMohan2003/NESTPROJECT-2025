import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saved-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saved-jobs.html',
  styleUrls: ['./saved-jobs.css']
})
export class SavedJobsComponent implements OnInit {
  savedJobs: any[] = [];

  ngOnInit(): void {
    this.loadSavedJobs();
  }

  // Load saved jobs from localStorage
  loadSavedJobs() {
    this.savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
  }

  // Remove job from saved jobs
  removeJob(job: any) {
    this.savedJobs = this.savedJobs.filter(j => j.id !== job.id);
    localStorage.setItem('savedJobs', JSON.stringify(this.savedJobs));
  }
}
