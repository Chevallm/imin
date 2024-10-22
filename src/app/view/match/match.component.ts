import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './match.component.html',
  styleUrl: './match.component.scss'
})
export class MatchComponent {

  private title = inject(Title);
  private route = inject(ActivatedRoute);
  private matchId = this.route.snapshot.params['id'];
  protected match = {
    id: 'zaopfjaioz',
    where: 'Somewhere',
    when: new Date().getTime(),
    description: 'Paddle',
    maxParticipants: 4,
    participants: ['Maxime', 'Yoann', 'Ismail', 'Moncef', 'Nicolas', 'Hugo']
  }
  

  constructor() {
    this.title.setTitle(this.title.getTitle() + ' - ' + this.matchId);
  }

}
