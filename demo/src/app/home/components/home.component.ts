import { Component, EventEmitter, Output } from '@angular/core';
import { Phrase } from 'src/app/shared/models/phrase.model';
import { CorporateNonsenseService } from 'src/app/shared/services/corporate-nonsense.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  corporateNonsense: Array<Phrase> = [];

  constructor(private nonsenseService: CorporateNonsenseService) {}

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
