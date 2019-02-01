import { Component, OnInit } from '@angular/core';
import { CorporateNonsenseRxjsService } from '../../services/corporate-nonsense-rxjs.service';
import { Observable } from 'rxjs';
import { Phrase } from 'src/app/models/phrase.model';

@Component({
  selector: 'app-rxjs-page',
  templateUrl: './rxjs-page.component.html',
  styleUrls: ['./rxjs-page.component.css']
})
export class RxjsPageComponent implements OnInit {
  nonsense$: Observable<Phrase[]>;

  constructor(private nonsenseService: CorporateNonsenseRxjsService) { }

  ngOnInit() {
    this.nonsense$ = this.nonsenseService.getNonsenseState();
    this.nonsense$.subscribe(nonsensicle => {
      console.log(nonsensicle);
    });
  }

  getNewNonsense(toGetOrNotToGet: boolean) {
    this.nonsenseService.getNewNonsense();
  }

  deleteNonsense(nonsense: Phrase) {
    this.nonsenseService.removeNonsense(nonsense);
  }
}
