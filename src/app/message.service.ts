import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class MessageService {
  private subject = new Subject<any>();
  sendMessage(message): void {
    this.subject.next(message);
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  clearMessage(): void {
    this.subject.next();
  }
}

