import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'NumberToFixedPipe' })
export class NumberToFixedPipe implements PipeTransform {
  transform(value: number): string {
    return value.toFixed(1);
  }
}
