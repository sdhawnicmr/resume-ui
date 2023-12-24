import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'resume-ui';
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    ){
    }
  ngOnInit(): void{
        this.titleService.setTitle( "Sushmita Dhawni | Quality Specialist" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Quality, Specialist'},
      {name: 'description', content: 'I have 8 years of experience accessing Quality my goal is to provide the best product.'},
    ]);
    
    
    AOS.init(); 

  }
}
