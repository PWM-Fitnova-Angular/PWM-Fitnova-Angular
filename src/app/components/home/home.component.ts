import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../services/globlals.service';
import { PlanTypesComponent } from '../../templates/plan-types/plan-types.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlanTypesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  description: string = "";

  constructor(private globals: GlobalsService) {}

  ngOnInit() {
    this.globals.webData$.subscribe((webData) => {
      for (const item of webData) {
        console.log(item);
        this.description = item.home;
      }
    });
  }

}
