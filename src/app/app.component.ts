import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NgForOf} from "@angular/common";
import {PlantsViewComponent} from "./plants-view/plants-view.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'plants';
  header: header = {
    hrefs: [
    ],
    social: [
      {
        href: 'https://github.com/k3nder/plants-angular',
        icon: '/assets/github-mark-white.svg',
      }
    ],
    logo: "/favicon.ico"
  }
}
interface header{
  hrefs: {
    href: string,
    display: string,
  }[],
  social: {
    href: string,
    icon: string,
  }[],
  logo: string,
}
