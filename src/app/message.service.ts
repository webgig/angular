import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string){
    this.messages.push(message);
  }

  clear() {
    console.log(222);
    this.messages = [];
  }

  constructor() { }
}
