import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-corporate-card',
  templateUrl: './corporate-card.component.html',
  styleUrls: ['./corporate-card.component.css']
})
export class CorporateCardComponent {
  @Output()
  getNonsense = new EventEmitter<boolean>();

  constructor() { }
}
