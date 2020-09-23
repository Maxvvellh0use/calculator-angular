import { Component } from '@angular/core';
import {Store , select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { typingNumber, reset, typingOperator } from './keyboard.action';
import { selectInputValue } from './keyboard.selectors';
import {InputValueState} from './keyboard.reducer';
import {calculate} from './helpers/calculate';
import {
  maxNumberQuantity ,
  maxOperatorQuantity ,
  num1Index ,
  num2Index ,
  numbers ,
  operatorIndex ,
  operators
} from './consts';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})

export class KeyboardComponent {
  public inputValue$: Observable<string>;
  public inputValue = '';
  public totalCalc: number;
  public numbers: string[] = numbers;
  public operators: string[] = operators;

  constructor(private store: Store<InputValueState>) {
    this.inputValue$ = store.pipe(select(selectInputValue));
  }

  typingNumber = (target) => {
    if (this.inputValue.split(' ').length < maxNumberQuantity) {
      this.store.dispatch(typingNumber({ value: target.dataset.value }));
      this.inputValue$.subscribe(value => this.inputValue = value);
    }
  }

  typingOperator = (target) => {
    if (this.inputValue.split(' ').length < maxOperatorQuantity) {
      this.store.dispatch(typingOperator({ value: target.dataset.value }));
      this.inputValue$.subscribe(value => this.inputValue = value);
    }
  }

  calc = () => {
    const expressionArr: string[] = this.inputValue.split(' ');
    this.totalCalc = calculate(expressionArr[operatorIndex],
      expressionArr[num1Index], expressionArr[num2Index]);
    this.reset();
    this.store.dispatch(typingNumber({ value: this.totalCalc.toString() }));
  }

  reset = () => {
    this.store.dispatch(reset());
  }
}
