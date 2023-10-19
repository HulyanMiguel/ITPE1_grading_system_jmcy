import { Component, OnInit } from '@angular/core';
import { students_Data } from 'src/app/shareddata/studentdata';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  studentdata= students_Data
  constructor() { }

  ngOnInit(): void {
  }

}
