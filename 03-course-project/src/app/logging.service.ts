import { Injectable } from '@angular/core';

// ? Not important for application. Just a demo for understanding services
// @Injectable({
//   providedIn: 'root',
// })
export class LoggingService {
  lastLog: string;
  constructor() {}

  printLog(message: string) {
    console.log(message);
    console.log(this.lastLog);
    this.lastLog = message;
  }
}
