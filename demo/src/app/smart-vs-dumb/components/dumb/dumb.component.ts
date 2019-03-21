import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Phrase } from 'src/app/shared/models/phrase.model';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
