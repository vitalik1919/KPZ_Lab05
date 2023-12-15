import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subType',
  standalone: true
})
export class SubTypePipe implements PipeTransform {

  transform(subscriptionName: string): string {

    const isMorning = subscriptionName.toLowerCase().includes('morning');
    const isAfternoon = subscriptionName.toLowerCase().includes('afternoon');
    const isEvening = subscriptionName.toLowerCase().includes('evening');

    let emoji = '';
    if(isMorning) {
      emoji = '🌅';
    }
    else if(isAfternoon) {
    emoji = '☀️';
    }
    else if(isEvening) {
      emoji = '🌙';
    }
    else {
      emoji = '💪';
    }

    return subscriptionName.concat(" " + emoji);
  }

}
