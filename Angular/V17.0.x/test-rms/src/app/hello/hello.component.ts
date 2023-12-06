import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  // templateUrl: './hello.component.html',
  template: `
    <h2>안녕하세요{{ name }}</h2>
    <input type="text" #inputYourName />
    <button (click)="setName(inputYourName.value)">등록</button>
  `,
  styles: [``],
})
export class HelloComponent {
  name!: string;
  setName(name: string) {
    this.name = name;
  }
}
