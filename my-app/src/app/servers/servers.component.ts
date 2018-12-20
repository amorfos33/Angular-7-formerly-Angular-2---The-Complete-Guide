import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //     <app-server></app-server>
  //     <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreateStatus = 'No server was created!';
  serverName = 'Test Server';


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreateStatus = 'Server was creatred! Name is' + this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
