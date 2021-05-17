import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // //Using @output
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;


  //Using @output
  //Data send from eventemitter to parent component(App conponent) with object data type
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();

   // Altrenated use like this:
  //@Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  //Using @output
  // onAddServer() {
  //   // Get Data from Event and send EventEmitter
  //   this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  // }

  // onAddBlueprint() {
  //   // Get Data from Event and send EventEmitter
  //   this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  // }


//Using Local References in Templates
  onAddServer(nameInput:HTMLInputElement) {
    // Using @ViewChild
    console.log(this.serverContentInput);
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});

    // console.log(nameInput.value);
    // // Get Data from Event and send EventEmitter
    // this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
     // Using @ViewChild
     this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
    
    // console.log(nameInput.value);
    // // Get Data from Event and send EventEmitter
    // this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }
}
