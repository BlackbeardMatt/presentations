import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-corporate-card',
  templateUrl: './corporate-card.component.html',
  styleUrls: ['./corporate-card.component.css']
})
export class CorporateCardComponent {
  @Output()
  getNonsense = new EventEmitter<boolean>();

  @Input()
  nonsenseCost = 4;

  constructor() { }
}
