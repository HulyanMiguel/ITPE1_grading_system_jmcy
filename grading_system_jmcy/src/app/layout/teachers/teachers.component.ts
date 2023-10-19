import { Component, OnInit } from '@angular/core';
import { teachers_Data } from 'src/app/shareddata/teacherdata';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  teacherdata= teachers_Data
  constructor() { }

  ngOnInit(): void {
  }

}
