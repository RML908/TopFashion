import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {

  @Input('appIfnot') set ifNot(condition:boolean){
    if(!condition){
      this.viewConteiner.createEmbeddedView(this.templateRef)
    }
    else{
      this.viewConteiner.clear()
    }
  }

  constructor(
              private templateRef: TemplateRef<any>,
              private viewConteiner: ViewContainerRef

  ) { }

}
