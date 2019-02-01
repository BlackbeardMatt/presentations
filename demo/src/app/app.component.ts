import { Component } from '@angular/core';
import { CorporateNonsenseChatService } from './services/corporate-nonsense-chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  constructor() {
    // chatService.getCorporateNonsense();
    // chatService.getCorporateNonsenseStream().subscribe((nonsense) => {
    //   console.log('New nonsense: ', nonsense);
    // });
  }
}
