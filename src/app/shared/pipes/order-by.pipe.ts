import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {

  transform(initialArray: any[], key: string, isAscending: boolean): any[] {
    console.log(initialArray);
    const sortedArray = initialArray.sort((firstValue, secondValue) => {
      if (this.getValue(key, firstValue) > this.getValue(key, secondValue)) return isAscending ? 1 : -1;
      if (this.getValue(key, firstValue) < this.getValue(key, secondValue)) return isAscending ? -1 : 1;
      return 0;
    });
    console.log(sortedArray);
    if (!sortedArray) return initialArray;
    
    return sortedArray;
  }

  private getValue(string: string, object: any) {
    return string.replace(/\[([^\]]+)]/g, '.$1').split('.').reduce((o, p) => o[p], object);
  }
}
