import {Component, Input} from '@angular/core';
import {PlantsViewComponent} from "../plants-view/plants-view.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlantsViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title: string = 'PLANTS!';
}
