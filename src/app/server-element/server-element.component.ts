import { AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit,ViewEncapsulation, OnChanges, DoCheck, AfterContentInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // Data received in this format into app (Parent Component)
  @Input() element: {type: string, name: string,content: string}

  // Altrenated use like this:
  //@Input('srvElement') element: {type: string, name: string,content: string}


  // Life cycle hooks Checking
  @Input() name:string;
  constructor() { 
    console.log('constructor called!');
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }
  ngOnInit(){
    console.log('ngOnInit called!');
  }
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }

}
