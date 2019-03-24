import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CorporateNonsenseService } from './shared/services/corporate-nonsense.service';
import { CorporateNonsenseRxjsService } from './shared/services/corporate-nonsense-rxjs.service';
import { Phrase } from './shared/models/phrase.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  totalAmount = 0;

  constructor(private store: Store, private rxjsStore: CorporateNonsenseRxjsService) { }

  ngOnInit(): void {
  }
}
