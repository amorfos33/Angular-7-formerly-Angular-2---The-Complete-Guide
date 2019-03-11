import { Pipe } from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
  name: 'reverse'
})
export class ReversePipe {
  transform(value: string) {
    // tslint:disable-next-line:quotemark
    return value.split("").reverse().join("");
  }
}
