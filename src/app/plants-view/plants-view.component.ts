import { Component } from '@angular/core';
import {PlantsService} from "../plants.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-plants-view',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './plants-view.component.html',
  styleUrl: './plants-view.component.css'
})
export class PlantsViewComponent {
  constructor(public plantsService: PlantsService) {
  }
  getTemperatureColor(temperature: number): string {
    if(temperature <= 10){
      return 'cyan';
    } else if (temperature <= 19){
      return 'green';
    } else if (temperature >= 20){
      return 'red';
    }
    return 'white';
  }
}
