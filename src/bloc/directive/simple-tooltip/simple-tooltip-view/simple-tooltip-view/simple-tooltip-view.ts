import {Component, ComponentRef, HostListener, inject, Input, OnInit, ViewContainerRef} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {SimpleTooltip} from '../../simple-tooltip';

@Component({
  selector: '',
  imports: [],
  templateUrl: './simple-tooltip-view.html',
  styleUrl: './simple-tooltip-view.css',
  standalone: true,
})
export class SimpleTooltipView implements OnInit {
  @Input() src: any;

  @Input() viewComponent: any;

  private domSanitizer: DomSanitizer = inject(DomSanitizer);


  @HostListener('mouseleave') onMouseLeave() {
    this.viewComponent.destroy();
  }


  get srcUrl() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.src);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.src);
  }

}
