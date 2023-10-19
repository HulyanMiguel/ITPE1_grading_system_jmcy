import { Component, OnInit } from '@angular/core';
import { dashboardData } from 'src/app/shareddata/dashboarddata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboard_data = dashboardData;

  ngOnInit(): void {
  }

}
