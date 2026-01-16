import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatToolbar],
  // templateUrl: './header.html',
  template: `
    <mat-toolbar class="w-full elevated py-2">
      <div class="max-w-[1200px] mx-auto w-full"><span>Modern Store</span></div>
    </mat-toolbar>
  `,
  styleUrl: './header.scss',
})
export class Header {}
