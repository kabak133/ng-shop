import {Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Renderer2} from "@angular/core";
import {log} from "util";

@Directive({
  selector: "[click.outside]"
})
export class ClickOutSide implements OnInit, OnDestroy {
  @Output("click.outside") clickOutside = new EventEmitter();
  unsubscribe;

  constructor(private renderer: Renderer2, private element: ElementRef) {
  }

  ngOnInit() {
    this.unsubscribe = this.renderer.listen(document, "click", event => {
      if (this.element.nativeElement.contains(event.target) === false) {
        this.clickOutside.emit(event);
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
