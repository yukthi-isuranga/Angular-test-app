import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Yukthi } from './yukthi/yukthi';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('my-app');
}
