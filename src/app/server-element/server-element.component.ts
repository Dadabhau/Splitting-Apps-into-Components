import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements OnInit {
  // Data received in this format into app (Parent Component)
  @Input() element: {type: string, name: string,content: string}

  // Altrenated use like this:
  //@Input('srvElement') element: {type: string, name: string,content: string}
  constructor() { }

  ngOnInit(): void {
  }

}
