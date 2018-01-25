import { Directive, ElementRef, OnInit} from '@angular/core';

@Directive({ 
    selector: '[setHight]' 
})

export class setHightDirective implements OnInit{
    constructor(
        private el: ElementRef
    ) {}
    ngOnInit(){
        this.reSet()
        window.onresize=()=>{
            let width = this.el.nativeElement.offsetWidth;
            if(width>1030){
                this.el.nativeElement.style.height='580px'
            }else{
                this.el.nativeElement.style.height=width*9/16+'px'
            }
        }
    }
    reSet(){
        let width = this.el.nativeElement.offsetWidth;
        if(width>1030){
            this.el.nativeElement.style.height='580px'
        }else{
            this.el.nativeElement.style.height=width*9/16+'px'
        }
    }
}