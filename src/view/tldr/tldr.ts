import {Component, inject} from '@angular/core';
import {WINDOW} from '../../bloc/directive/utils/window';

@Component({
  selector: 'app-tldr', imports: [], templateUrl: './tldr.html', styleUrl: './tldr.css'
})
export class TLDR {

  public calendarLink: string = "https://calendar.app.google/WdPV8gysBeRiwU4H8";

  public linkedIn: string = "https://www.linkedin.com/in/mdhashim/";
  public github: string = "https://github.com/mohammedhashim790";
  public medium: string = "https://medium.com/@mohammedhashim790";

  protected readonly window = inject(WINDOW);

}
