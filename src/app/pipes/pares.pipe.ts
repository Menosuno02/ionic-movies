import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from '../interfaces/interfaces';

@Pipe({
  name: 'pares'
})
export class ParesPipe implements PipeTransform {

  transform(value: IMovie[]): IMovie[][] {
    let mitad = Math.ceil(value.length/2);
    var primer: IMovie[] = value.slice(0,mitad);
    var segundo: IMovie[] = value.slice(mitad);
    return [primer,segundo];
  }

}
