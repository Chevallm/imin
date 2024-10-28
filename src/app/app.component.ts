import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { BreadcrumbsService } from './services/breadcrumbs.service';
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, BreadcrumbsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private breadcrumbsService = inject(BreadcrumbsService);
  

  constructor() {
    this.breadcrumbsService.setPath([
      {
        label: 'Home',
        link: ['']
      }
    ])
  }
}
