import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Phrase } from 'src/app/shared/models/phrase.model';
import { CorporateNonsenseRxjsService } from 'src/app/shared/services/corporate-nonsense-rxjs.service';

@Component({
  selector: 'app-rxjs-page',
  templateUrl: './rxjs-page.component.html',
  styleUrls: ['./rxjs-page.component.css'],
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
export class RxjsPageComponent implements OnInit {
  nonsense$: Observable<Phrase[]>;

  constructor(private nonsenseService: CorporateNonsenseRxjsService) { }

  ngOnInit() {
    this.nonsense$ = this.nonsenseService.getNonsenseState();
  }

  getNewNonsense(toGetOrNotToGet: boolean) {
    this.nonsenseService.getNewNonsense();
  }

  deleteNonsense(nonsense: Phrase) {
    this.nonsenseService.removeNonsense(nonsense);
  }
}
