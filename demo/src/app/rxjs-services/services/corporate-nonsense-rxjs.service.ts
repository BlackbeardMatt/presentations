import { Injectable } from '@angular/core';
import { Phrase } from 'src/app/models/phrase.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorporateNonsenseRxjsService {
  nonsense: Phrase[] = [];
  nonsense$: BehaviorSubject<Phrase[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  addNonsense(corporateNonsense: Phrase) {
    this.nonsense.push(corporateNonsense);
    this.nonsense$.next(this.nonsense);
  }

  removeNonsense(corporateNonsense: Phrase) {
    const index = this.nonsense.findIndex((element: Phrase) => {
      return element.phrase === corporateNonsense.phrase;
    });
    if (index > -1) {
      this.nonsense.splice(index, 1);
    }

    this.nonsense$.next(this.nonsense);
  }

  getNonsenseState(): BehaviorSubject<Phrase[]> {
    return this.nonsense$;
  }

  getNewNonsense() {
    this.http.get<Phrase>(`http://localhost:3000`).subscribe((newNonsense: Phrase) => {
      this.addNonsense(newNonsense);
    });
  }
}
