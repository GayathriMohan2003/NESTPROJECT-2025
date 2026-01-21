import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './jobs.html',
  styleUrls: ['./jobs.css']
})
export class JobsComponent implements OnInit {
  jobs: any[] = [];
  savedJobs: any[] = [];
  searchKeyword: string = '';
  selectedJob: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getJobs();
    this.loadSavedJobs();
  }

  getJobs() {
    this.http.get<any>('https://remotive.com/api/remote-jobs').subscribe(data => {
      this.jobs = data.jobs;
    });
  }

  searchJobs() {
    if (this.searchKeyword.trim() !== '') {
      this.jobs = this.jobs.filter(job =>
        job.title.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    } else {
      this.getJobs();
    }
  }

  viewDetails(job: any) {
    this.selectedJob = job; // Show job details below the job list
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  saveJob(job: any) {
    let saved = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    if (!saved.find((j: any) => j.id === job.id)) {
      saved.push(job);
      localStorage.setItem('savedJobs', JSON.stringify(saved));
      this.loadSavedJobs();
      alert('Job saved!');
    } else {
      alert('Job already saved!');
    }
  }

  loadSavedJobs() {
    this.savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
  }

  backToJobs() {
    this.selectedJob = null;
  }
}
