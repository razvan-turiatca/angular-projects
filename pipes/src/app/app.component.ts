import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number;
  height: number;
  miles: number;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onNameChange(value: string) {
    this.name = value;
  }
  onDateChange(s: string) {
    this.date = s;
    console.log(this.date);
  }
  onAmountChange(value: string) {
    this.amount = +value;
  }
  onHeightChange(value: string) {
    this.height = +value;
  }
  onMilesChange(value: string) {
    this.miles = +value;
  }
}
