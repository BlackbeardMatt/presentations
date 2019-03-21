import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Phrase } from 'src/app/shared/models/phrase.model';
import { CorporateNonsenseService } from 'src/app/shared/services/corporate-nonsense.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css'],
  animations: [
    trigger('simpleFadeAnimation', [

      state('in', style({ opacity: 1 })),

      transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
      ]),

      transition(':leave',
        animate(600, style({ opacity: 0 })))
    ])
  ]
})
export class SmartComponent implements OnInit {
  corporateNonsense: Phrase[] = [];

  constructor(private nonsenseService: CorporateNonsenseService) { }

  ngOnInit() { }

  getNonsense() {
    this.nonsenseService.getCorporateNonsense().subscribe((nonsense: Phrase) => {
      this.corporateNonsense.push(nonsense);
    });
  }

  removeNonsense(nonsense: Phrase) {
    const index = this.corporateNonsense.findIndex((element: Phrase) => {
      return element.phrase === nonsense.phrase;
    });
    this.corporateNonsense.splice(index, 1);
  }
}
