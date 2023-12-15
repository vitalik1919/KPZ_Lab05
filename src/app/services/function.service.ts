import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  maxPrice : number = 50000;
  applyFilter(value: string) {
    this.maxPrice = parseInt(value);
  }
  getMaxPrice() : number {
    return this.maxPrice;
  }

}
