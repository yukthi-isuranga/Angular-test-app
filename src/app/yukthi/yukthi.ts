import { Component } from '@angular/core';

@Component({
  selector: 'app-yukthi',
  imports: [],
  templateUrl: './yukthi.html',
  styleUrl: './yukthi.scss',
})
export class Yukthi {
  protected title = 'this is attribute. xxxx';
  protected isDesabled = false;

  protected onClick() {
    console.log('Button Clicked');
    this.isDesabled = !this.isDesabled;
  }
}
