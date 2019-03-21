import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { CorporateNonsenseState } from '../../store/state/corporate-nonsense.state';
import { Observable } from 'rxjs';
import { GetCorporateNonsense, GetSingleNonsense, RemoveNonsense } from '../../store/actions/corporate-nonsense.actions';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Phrase } from 'src/app/shared/models/phrase.model';

@Component({
  selector: 'app-ngxs-page',
  templateUrl: './ngxs-page.component.html',
  styleUrls: ['./ngxs-page.component.css'],
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
export class NgxsPageComponent implements OnInit {
  @Select(CorporateNonsenseState.getNonsense) nonsense$: Observable<Phrase[]>;

  constructor(private store: Store) { }

  ngOnInit() { }

  getNewNonsense() {
    this.store.dispatch(new GetSingleNonsense);
  }

  deleteNonsense(nonsense: Phrase) {
    this.store.dispatch(new RemoveNonsense(nonsense));
  }

  superDeal(shouldWe: boolean) {
    if (shouldWe) {
      this.store.dispatch(new GetCorporateNonsense(5));
    }
  }
}
