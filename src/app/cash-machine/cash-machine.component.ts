import {Component} from '@angular/core';
import {CashMachine} from '../CashMachine';

@Component({
  selector: 'app-cash-machine',
  templateUrl: './cash-machine.component.html',
  styleUrls: ['./cash-machine.component.css'],
})
export class CashMachineComponent {

  constructor(private cashMachine: CashMachine) {
  }

  public putMoney(amount: number): void {
    this.cashMachine.putMoney(amount);
  }

  public withdraw(amount: number): void {
    this.cashMachine.withdraw(amount);
  }

  public hasAvailableAmount(amount: number): boolean {
    return this.cashMachine.hasAvailableAmount(amount);
  }

}
