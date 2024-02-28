import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  incrementActiveToInactive() {
    this.activeToInactive++;
    console.log('ActiveToInactive: ' + this.activeToInactive);
  }

  incrementInactiveToActive() {
    this.inactiveToActive++;
    console.log('InactiveToActive: ' + this.inactiveToActive);
  }
}
