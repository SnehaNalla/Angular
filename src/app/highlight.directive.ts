import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private urname:ElementRef) { }
   
  @HostListener('mouseenter')
  onMouseEnter(){
    this.highlightColor('green');
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.highlightColor('orange');
  }

  private highlightColor(color: string){
    this.urname.nativeElement.style.backgroundColor = color;
    this.urname.nativeElement.style.padding = '8px';
  }
}
