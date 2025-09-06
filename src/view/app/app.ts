import {Component, HostListener, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root', imports: [RouterOutlet, NgClass], templateUrl: './app.html', styleUrl: './app.css',
})
export class App {
  top: any;
  left: any;
  expand = false;
  protected readonly title = signal('mdhashim');
  constructor() {
  }

  @HostListener('document:click', ['$event']) onClick(event: any) {
    this.expand = true;
    setTimeout(() => {
      this.expand = false;
    }, 500)
  }

  @HostListener('document:mousemove', ['$event']) onMousemove(event: any) {
    this.top = (event.pageY - 5) + "px";
    this.left = (event.pageX - 5) + "px";
  }

}
