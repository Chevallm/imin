import { Component, inject } from '@angular/core';
import { max, Observable, of } from 'rxjs';
import { Match } from '../../types/Match';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [AsyncPipe, DatePipe, RouterModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})
export class MatchesComponent {

  private breadcrumbsService = inject(BreadcrumbsService);

  protected matches$: Observable<Match[]> = of([
    {
      id: 'zaopfjaioz',
      where: 'Somewhere',
      when: new Date().getTime(),
      description: 'Paddle',
      maxParticipants: 4,
      participants: ['Maxime', 'Yoann', 'Ismail', 'Moncef', 'Nicolas', 'Hugo']
    },
    {
      id: 'zaopfjaioz',
      where: 'Somewhere',
      when: new Date().getTime(),
      description: 'Paddle',
      maxParticipants: 4,
      participants: ['Maxime', 'Yoann', 'Ismail', 'Moncef', 'Nicolas', 'Hugo']
    },
    {
      id: 'zaopfjaioz',
      where: 'Somewhere',
      when: new Date().getTime(),
      description: 'Paddle',
      maxParticipants: 4,
      participants: ['Maxime', 'Yoann', 'Ismail', 'Moncef', 'Nicolas', 'Hugo']
    },
    {
      id: 'zaopfjaioz',
      where: 'Somewhere',
      when: new Date().getTime(),
      description: 'Paddle',
      maxParticipants: 4,
      participants: ['Maxime', 'Yoann', 'Ismail', 'Moncef', 'Nicolas', 'Hugo']
    }
  ]);

  constructor() {
    this.breadcrumbsService.setPath([
      {
        label: 'Home',
        link: ['']
      },
      {
        label: 'Matches',
        link: ['matches']
      }
    ])
  }

}
