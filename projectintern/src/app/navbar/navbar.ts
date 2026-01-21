import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,  // <--- add this if it's standalone
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  jobs: any[] = [];
  savedJobs: any[] = [];
  selectedJob: any = null;
  searchKeyword: string = '';
  showJobs: boolean = false;
  showSaved: boolean = false;
  showHomePage: boolean = true;
  showAboutPage: boolean = false; 

  constructor(private http: HttpClient) {
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
      this.showJobs = true;
      this.showSaved = false;
      this.selectedJob = null;
      this.showHomePage = false;
    }
  }

  viewDetails(job: any) {
    this.selectedJob = job;
    this.showJobs = false;
    this.showSaved = false;
    this.showHomePage = false;
  }

  backToJobs() {
    this.selectedJob = null;
    this.showJobs = true;
    this.showSaved = false;
    this.showHomePage = false;
  }

  saveJob(job: any) {
    let saved = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    saved.push(job);
    localStorage.setItem('savedJobs', JSON.stringify(saved));
    alert('Job saved!');
    this.loadSavedJobs();
  }

  loadSavedJobs() {
    this.savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
  }

  showAllJobs() {
    this.showJobs = true;
    this.selectedJob = null;
    this.showSaved = false;
    this.showHomePage = false;
  }

  showSavedJobs() {
    this.showSaved = true;
    this.showJobs = false;
    this.selectedJob = null;
    this.showHomePage = false;
    this.loadSavedJobs();
  }

  showJobDetails() {
    if (this.jobs.length > 0) {
      this.selectedJob = this.jobs[0]; // Show first job as default
      this.showJobs = false;
      this.showSaved = false;
      this.showHomePage = false;
    }
  }

  showHome() {
    this.showHomePage = true;
    this.showJobs = false;
    this.showSaved = false;
    this.selectedJob = null;
  }

  showJobsList() {
    this.showJobs = true;
    this.showHomePage = false;
    this.showSaved = false;
    this.selectedJob = null;
  }
}
