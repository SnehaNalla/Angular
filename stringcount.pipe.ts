import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringcount'
})
export class StringcountPipe implements PipeTransform {

  transform(value: string): number {
    return value.length;
  }

}
