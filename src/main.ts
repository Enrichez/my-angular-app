import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h3>Data Binding</h3>
    <input [value]="name" (input="name = $any(event.target).value" placeholder="Type your name")>
    <p>Hello { name }</p>
    <button (click)="count = count + 1">Can't click</button>
  `
})
export class App {
  name = 'Angular';
  count = 0;
  isDisabled = true;
}

bootstrapApplication(App);
