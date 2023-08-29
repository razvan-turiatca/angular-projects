import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  inputText = '';

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputText = target.value;
  }

  compare(randLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
