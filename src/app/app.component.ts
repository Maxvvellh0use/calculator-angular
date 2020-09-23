import { Component } from '@angular/core';
import { select , Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectInputValue } from './keyboard/keyboard.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputValue$: Observable<string>;

  constructor(private store: Store<{ inputValue: string }>) {
    this.inputValue$ = store.pipe(select(selectInputValue));
  }
}
