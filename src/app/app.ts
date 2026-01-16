import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Yukthi } from './yukthi/yukthi';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Yukthi],
  // templateUrl: './app.html',
  template: `<h1 class="text-2xl p-6">Yukthi Isuranga Bombuwala</h1>`,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('my-app');
}
