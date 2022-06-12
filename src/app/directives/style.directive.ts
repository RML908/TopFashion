import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';
import {Event} from "@angular/router";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
@Input('appStyle') color: string ='red'
@Input() dStyles!: { border?: string; fontWeight?: string; borderRadius?: string; }
// @Input() fontWeight ='bold'

// @Input() fontWeight ='bold'
  constructor(private el: ElementRef,
              private r:Renderer2){
  }
@HostListener('click', ['$event.target']) onClick(event:Event) {

}
@HostBinding('style.color') elColor?:string | null
  @HostListener('mouseenter') onEnter(event:Event){
  this.elColor = this.color
    // this.r.setStyle(this.el.nativeElement, 'color',this.color)
    // this.r.setStyle(this.el.nativeElement, 'fontWeight',this.dStyles.fontWeight)
    // this.r.setStyle(this.el.nativeElement, 'border',this.dStyles.border)
    // this.r.setStyle(this.el.nativeElement, 'borderRadius',this.dStyles.borderRadius)
}
@HostListener('mouseleave') onLeave(){
  this.elColor = null
    // this.r.setStyle(this.el.nativeElement, 'color', null)
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
    // this.r.setStyle(this.el.nativeElement, 'border', null)
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', null)
}
}
