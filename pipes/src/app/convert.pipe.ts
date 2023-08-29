import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, targetUnits: string): any {
    if (!targetUnits) return '';
    switch (targetUnits) {
      case 'km':
        console.log(+value * 1.609);
        return +value * 1.609 + targetUnits;
      case 'm':
        return +value * 1.609 * 1000 + targetUnits;
      default:
        return value + 'wrong input';
    }
  }
}
