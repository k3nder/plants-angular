import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {plant, PlantsService} from "../plants.service";
import {NgForOf} from "@angular/common";
@Component({
  selector: 'app-plant-detail',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './plant-detail.component.html',
  styleUrl: './plant-detail.component.css'
})
export class PlantDetailComponent {
  id: number = 0;
  plant: plant = this.plantsService.plants[this.id];
  constructor(private route: ActivatedRoute, public plantsService: PlantsService) {
    this.route.params.subscribe(params => this.id = params['id']);
    this.plant = this.plantsService.plants[this.id];
  }
}
