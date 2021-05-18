import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Data send to html from here - @Input
  serverElements = [{type:'server', name: 'server', content:'Test server here'}];


  // Data get from cockpit  - @Output
  onServerAdded(serverData: {serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // Data get from cockpit  - @Output
  onBlueprintAdded(blueprintData: {serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  
  // Life cycle hooks Checking
  onChangeFirst() {
    this.serverElements[0].name = 'changed!'
  }
  ngOnDestroyFirst(){
    this.serverElements.splice(0,1);
  }
}
