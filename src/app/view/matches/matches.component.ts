import { Component } from '@angular/core';
import { max, Observable, of } from 'rxjs';
import { Match } from '../../types/Match';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [AsyncPipe, DatePipe, RouterModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})
export class MatchesComponent {

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

}
