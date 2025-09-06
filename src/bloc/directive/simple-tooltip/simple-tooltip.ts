import {
    AfterViewInit,
    ComponentRef,
    Directive,
    ElementRef,
    HostListener,
    inputBinding,
    ViewContainerRef
} from '@angular/core';
import {SimpleTooltipView} from "./simple-tooltip-view/simple-tooltip-view/simple-tooltip-view";

@Directive({
    selector: '[simple-tooltip]'
})
export class SimpleTooltip implements AfterViewInit {

    private href: string | undefined;
    private viewComponent!: ComponentRef<SimpleTooltipView>;

    constructor(private elementRef: ElementRef<HTMLAnchorElement>, private viewRef: ViewContainerRef,) {

    }

    @HostListener('click', ['$event']) onClick(event: MouseEvent) {
        event.preventDefault();
    }

    @HostListener('mouseover') onMouseOver() {
        console.log('mouseover at ', this.href);
        this.viewComponent = this.viewRef.createComponent(SimpleTooltipView, {
            bindings: [inputBinding('src', () => this.href)]
        });
    }


    ngAfterViewInit(): void {
        this.href = this.elementRef.nativeElement.href;
        this.elementRef.nativeElement.style.position = 'relative';
    }


}
