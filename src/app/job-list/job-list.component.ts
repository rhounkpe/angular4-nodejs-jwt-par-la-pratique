import { Component, OnInit } from '@angular/core';

import { JobService } from '../services/job.service';


@Component({
  selector: 'digitcom-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs = [];
  error = '';

  constructor(private jobService:JobService) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe(
      data => this.jobs = data,
      error => {
        console.log(error);
        this.error = error;
      }
    );
  }

}
