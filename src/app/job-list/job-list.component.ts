import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'digitcom-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs = [];

  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('data/jobs.json')
      .map(res => {
        this.jobs = res.json();
        console.log(res.json());
      })
      .subscribe();
  }

}
