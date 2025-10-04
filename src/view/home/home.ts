import {Component, inject, OnInit} from '@angular/core';
import {WINDOW} from '../../bloc/directive/utils/window';
import {RouterLink} from '@angular/router';
import {DatePipe} from '@angular/common';

const appConfig = require('../../AppConfig.json');

@Component({
  selector: 'app-home', imports: [
    RouterLink,
    DatePipe
  ], templateUrl: './home.html', styleUrl: './home.css',
})
export class Home implements OnInit {

  public calendarLink: string = "https://calendar.app.google/WdPV8gysBeRiwU4H8";

  public linkedIn: string = "https://www.linkedin.com/in/mdhashim/";
  public github: string = "https://github.com/mohammedhashim790";
  public medium: string = "https://medium.com/@mohammedhashim790";

  protected readonly window = inject(WINDOW);
  get updatedOn():number{
    return appConfig.timeOfBuild * 1000;
  }

  ngOnInit(): void {
    console.log(appConfig.timeOfBuild);
  }
}
