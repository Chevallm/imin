import { Component, inject } from '@angular/core';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {

  protected bs = inject(BreadcrumbsService);
  
}
