import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl:`./hello.component.scss`,
  
})
export class HelloComponent {
  name!: string;

  setName(name: string) {
    this.name = name;
  }
}
