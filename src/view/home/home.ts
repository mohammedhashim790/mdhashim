import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home', imports: [], templateUrl: './home.html', styleUrl: './home.css',
})
export class Home implements OnInit {

  public calendarLink: string = "https://calendar.app.google/WdPV8gysBeRiwU4H8";

  public linkedIn: string = "https://www.linkedin.com/in/mdhashim/";
  public github: string = "https://github.com/mohammedhashim790";
  public medium: string = "https://medium.com/@mohammedhashim790";
  protected readonly window = window;

  ngOnInit(): void {
  }
}
