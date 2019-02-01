import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-super-deal',
  templateUrl: './super-deal.component.html',
  styleUrls: ['./super-deal.component.css']
})
export class SuperDealComponent implements OnInit {
  @Output()
  superDeal = new EventEmitter<boolean>();

  count = 15;
  timer;

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.count--;
      if (this.count === 0) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

}
