export class Subscription {

  type: string;
  startTime: string;
  endTime: string;
  price: number;
  imageUrl: string;

  constructor(type: string, startTime: string, endTime: string, price: number, imageUrl: string) {
    this.type = type;
    this.startTime = startTime;
    this.endTime = endTime;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
