import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  
  active = 0;
  jobs:any=[];
  
  constructor( ) { }

  ngOnInit(): void {

    this.jobs = [{
      "Tab": "LTI MindTree",
      "Title": "TEST SPECIALIST ",
      "Date": "April 2022 - Present",
      "Description": [
        "I utilized the Pytest framework to automate the testing of both APIs and user interfaces.", 
        "My main objective was to create and automate test cases using Python to ensure that the product specifications were met.",
        "Moreover, I also made sure to validate that all policies were enforced and that all security-related",
        "scenarios were thoroughly tested."
      ]
      },{
      "Tab": "TSB Media Venture PVT Ltd.",
      "Title": "QUALITY ANALYST",
      "Date": "December 2020 - April 2022",
      "Description": [
        "I was the sole quality assurance personnel in the company, responsible for creating test plans, test strategies, designing test cases, and reviewing the Consent web and mobile-based application's test matrix.",
        "I conducted functional testing, system testing, regression testing, and ran automation scripts.",
        "I validated information from the backend utilizing MongoDB with the Admin and Client Dashboard, and employed Postman to create, update, delete, and authenticate the output.",
        "Additionally, I assisted in resolving client inquiries and concerns, and actively participated in daily scrum meetings and weekly suggestion meetings.",
        "I also utilized Jira to maintain the feature listing and track bugs."
      ]
  },
  {
      "Tab": "SAMA NEXTGEN India Pvt Ltd.",
      "Title": "QUALITY ANALYST",
      "Date": "Jun 2018 – March 2020",
      "Description": [
        "Prepared comprehensive test planning, test strategies, testcase design, and test matrix reviewing for the project.",
        "Executed thorough functional testing, system testing, and regression testing for the mobile application.",
        "Furthermore, conducted integration testing for the mobile app and speaker, verifying the functionality of physical speaker components and performing Alexa testing.",
        "Additionally, carried out IoT testing using the mobile application and integration testing with various mobile devices."
      ]
  },
  {
      "Tab": "IBM India Pvt Ltd",
      "Title": "APPLICATION DEVELOPER",
      "Date": "Sept. 2012 – July 2015",
      "Description": [
        "Took charge in creating test plan, test cases, and test matrix.",
        "Efficiently uploaded test cases to HP ALM Tool for manual test case execution.",
        "Actively engaged in feature testing, system testing, integration testing, and regression testing.",
        "Consistently attended daily scrum meetings.",
        "Played a key role in client calls and team meetings."
      ]
  }
]
  }

}
