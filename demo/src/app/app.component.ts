import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CorporateNonsenseService } from './shared/services/corporate-nonsense.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';

  constructor(private store: Store, private rxjsStore: CorporateNonsenseService) { }

  ngOnInit(): void {
    
  }
}
