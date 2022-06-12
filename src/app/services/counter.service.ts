import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter =0
decrease(){
    this.counter--
}
increase(){
  this.counter ++
}
  constructor() { }
}
