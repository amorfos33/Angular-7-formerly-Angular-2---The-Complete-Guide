import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
      this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    //   this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    //   this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = 'blue';
    }
}
