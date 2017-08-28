import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashMachineComponent } from './cash-machine.component';
import {CashMachine} from '../CashMachine';
import {instance, mock} from 'ts-mockito';

describe('CashMachineComponent', () => {
  let component: CashMachineComponent;
  let fixture: ComponentFixture<CashMachineComponent>;
  let cashMachineMock: CashMachine;
  let cashMachineInstance: CashMachine;

  beforeEach(async(() => {
    cashMachineMock = mock(CashMachine);
    cashMachineInstance = instance(cashMachineMock);
    TestBed.configureTestingModule({
      declarations: [ CashMachineComponent ],
      providers: [CashMachine]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('putting money', () => {
    it('should put money into cash machine', () => {
      // given

      // when
      component.putMoney(50);

      // then
    });
  });

  describe('withdrawing money', () => {
    it('should withdraw money from cash machine', () => {
      // given
      component.putMoney(50);

      // when
      component.withdraw(50);

      // then
    });
  });

  describe('checking available amount', () => {
    it('should check it in cash machine', () => {
      // given
      component.putMoney(50);

      // when
      const result = component.hasAvailableAmount(50);

      // then
      expect(true).toEqual(result);
    });
  });
});
