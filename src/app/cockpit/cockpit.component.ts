import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  //Data send from eventemitter to parent component(App conponent) with object data type
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();

   // Altrenated use like this:
  //@Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    // Get Data from Event and send EventEmitter
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    // Get Data from Event and send EventEmitter
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
}