import { Component, OnInit } from '@angular/core';
import { CorporateNonsenseService } from 'src/app/services/corporate-nonsense.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  constructor(private nonsenseService: CorporateNonsenseService) { }

  ngOnInit() {
  }

}
