// trainer.model.ts

import {EntityApiService} from "../services/entity-api.service";

export class Trainer {

  name: string;
  age: number;
  specialty: string;
  trainingPrice: number;
  imageUrl: string;

  constructor(name: string, age: number, specialty: string, trainingPrice: number, imageUrl: string) {
    this.name = name;
    this.age = age;
    this.specialty = specialty;
    this.trainingPrice = trainingPrice;
    this.imageUrl = imageUrl;
  }
}
