import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
aboutme:any =[];

  constructor(
  ) { }

  ngOnInit(): void {

let startDate:any = new Date(2020,12,31);
let endDate:any = new Date();

const startYear = startDate.getFullYear();
const startMonth = startDate.getMonth();
const endYear = endDate.getFullYear();
const endMonth = endDate.getMonth();

const experience =(((endYear - startYear) * 12 + (endMonth - startMonth))/12).toFixed(1);


    this.aboutme = [
      `Seasoned Quality Engineer with over <span class='underline'>8 years</span> of comprehensive experience in <span class='underline'>Manual</span> and <span class='underline'>Automation</span> testing. Proficient in utilizing tools such as Postman, Selenium, and Python to ensure the quality and reliability of software applications.`, 
      `Adept at creating effective test plans, executing rigorous testing procedures, and identifying and resolving defects.`, 
      "Some of the technologies that I have trained and worked on include (but are not limited to):"
  ]
  }

}
