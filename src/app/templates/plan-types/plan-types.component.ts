import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';
import {GlobalsService} from '../../services/globlals.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-plan-types',
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './plan-types.component.html',
  styleUrl: './plan-types.component.css'
})
export class PlanTypesComponent {

  plansData: any = {};
  plans: any = [];

  constructor(private globals: GlobalsService) {}

  ngOnInit() {
    this.globals.webData$.subscribe((webData) => {
      for (const item of webData) {
        this.plansData = item.planTypes;
        this.initPlans();
      }
    });

  }
  private initPlans() {
    const order = ['basic', 'standard', 'premium']
    for (const planName of order) {
      if(this.plansData.hasOwnProperty(planName)) {
        this.plans.push({
          name: planName,
          descriptions: this.plansData[planName]
        });
        console.log(this.plansData[planName]);
      }
    }
  }

}


