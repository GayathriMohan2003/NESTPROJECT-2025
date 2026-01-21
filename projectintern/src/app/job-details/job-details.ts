import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-details.html',
  styleUrls: ['./job-details.css']
})
export class JobDetailsComponent implements OnInit {

   job: any;          // Job data from JobsComponent
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.http.get<any>('https://remotive.com/api/remote-jobs')
      .subscribe(res => {
        this.job = res.jobs.find((j: any) => j.id === id);
      });
  }
}
