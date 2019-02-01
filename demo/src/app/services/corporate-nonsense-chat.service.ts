import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorporateNonsenseChatService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
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

  public getCorporateNonsenseStream = () => {
    return Observable.create((observer) => {
      this.socket.on('new-nonsense', (nonsense) => {
        console.log('new nonsense', nonsense);
        observer.next(nonsense);
      });
    });
  }
}
