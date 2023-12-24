import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-more-proyects',
  templateUrl: './more-proyects.component.html',
  styleUrls: ['./more-proyects.component.scss']
})
export class MoreProyectsComponent implements OnInit {
projects:any =[];
  constructor(
    private router: Router
    ) { }

    ngOnInit() {

      this.projects =  [{
        "Title": "DISTANT HEATING USING MICROWAVE TECHNOLOGY",
        "Description": "The remote heating project confidently utilizes microwave technology to efficiently heat from a distance, prioritizing energy efficiency, transmission losses, and environmental impact.",
        "ghLink": "",
        "demoLink": "",
        "Technologies": []
    },
    {
        "Title": "IMAGE RECOGNITION",
        "Description": "Python confidently utilizes machine learning to accurately recognize and categorize objects within images.",
        "ghLink": "",
        "demoLink": "",
        "Technologies": ["Python", "Machine-Learning"]
    }
   
]


        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
    redirect(route: string, event) {
      const id = event.target.id;
      if(id=='demoLink' || id=='ghLink' || route==''){
        return
      }
      window.open(route, '_blank');
    }

}
