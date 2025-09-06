import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home', imports: [], templateUrl: './home.html', styleUrl: './home.css',
})
export class Home implements OnInit {

  public calendarLink: string = "https://calendar.app.google/WdPV8gysBeRiwU4H8";

  ngOnInit(): void {
  }

  protected readonly window = window;
}
