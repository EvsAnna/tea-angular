import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quickDescription'
})
export class QuickDescriptionPipe implements PipeTransform {

  transform(description:string): string {
    if(description.length< 83) {
    return description;
    } else {
    return description.slice(0, 85) + '...';
    }
  }

}
