import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Phrase } from '../models/phrase.model';

@Injectable({
  providedIn: 'root'
})
export class CorporateNonsenseChatService {
  private url = 'http://localhost:3000';
  private socket;

  constructor(private http: HttpClient) {
    this.socket = io(this.url);
  }

  public getCorporateNonsense() {
    this.socket.emit('get-single-nonsense');
  }

  public getMultipleNonsense(numberOfNeededNonsense) {
    this.socket.emit('get-nonsense', numberOfNeededNonsense);
  }

  public startNonsense() {
    this.socket.emit('start-nonsense');
  }

  public endNonsense() {
    this.socket.emit('end-nonsense');
  }

  public getCorporateNonsenseStream = () => {
    return Observable.create((observer) => {
      this.socket.on('new-nonsense', (nonsense) => {
        console.log('new nonsense', nonsense);
        observer.next(nonsense);
      });
    });
  }

  public getSingleNonsense() {
    return this.http.get<Phrase>(this.url);
  }
}
