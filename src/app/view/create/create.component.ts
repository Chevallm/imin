import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  typeDate = signal<'known' | 'unknown' | undefined>(undefined);

}
