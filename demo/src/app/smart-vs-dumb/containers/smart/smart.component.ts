import { Component, OnInit } from '@angular/core';
import { CorporateNonsenseService } from 'src/app/services/corporate-nonsense.service';
import { Phrase } from 'src/app/models/phrase.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({ opacity: 0 })))
    ])
  ]
})
export class SmartComponent implements OnInit {
  corporateNonsense: Phrase[] = [];

  constructor(private nonsenseService: CorporateNonsenseService) { }

  ngOnInit() {
  }

  getNonsense() {
    this.nonsenseService.getCorporateNonsense().subscribe((nonsense: Phrase) => {
      this.corporateNonsense.push(nonsense);
      console.log(this.corporateNonsense);
    });
  }
}
