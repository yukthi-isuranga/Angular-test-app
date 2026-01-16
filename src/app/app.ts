import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Yukthi } from './yukthi/yukthi';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Yukthi],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('my-app');
}
