import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
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
