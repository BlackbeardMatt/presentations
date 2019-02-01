import { Component, Input } from '@angular/core';
import { Phrase } from 'src/app/models/phrase.model';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.css']
})
export class DumbComponent {
  @Input()
  nonsense: Phrase;
}
