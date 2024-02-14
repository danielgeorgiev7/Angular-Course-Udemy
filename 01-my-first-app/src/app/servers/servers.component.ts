import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  userCreationStatus = 'No user was created!';
  serverName = 'Testserver';
  username = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  ngOnInit(): void {}

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateUser() {
    this.userCreationStatus = 'User was created! Username: ' + this.username;
  }

  onUpdateUsername(event: any) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  resetUsername() {
    this.username = '';
    this.userCreationStatus = 'Username was reset! Type a new username!';
    setTimeout(() => {
      this.userCreationStatus = 'No user was created!';
    }, 4000);
  }
}
