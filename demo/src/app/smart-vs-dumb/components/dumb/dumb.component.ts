import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Phrase } from 'src/app/models/phrase.model';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.css']
})
export class DumbComponent {
  @Input()
  nonsense: Phrase;

  @Output()
  removeNonsense = new EventEmitter<Phrase>();

  remove() {
    this.removeNonsense.emit(this.nonsense);
  }
}
