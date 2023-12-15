import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Trainer} from "../../models/Trainer";
import {PriceFilterDirective} from "../../directives/price-filter.directive";
import {EntityApiService} from "../../services/entity-api.service";
import {FunctionService} from "../../services/function.service";

@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [
    NgForOf,
    PriceFilterDirective
  ],
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.css'
})
export class TrainerComponent {

  constructor(public service : FunctionService) { }

  items: Trainer[] = [

    new Trainer('John Doe', 30, 'Fitness', 300, 'assets/trainer.jpg'),
    new Trainer('Jane Smith', 25, 'Yoga', 350, 'assets/trainer.jpg'),
    new Trainer('Bob Johnson', 35, 'CrossFit', 280, 'assets/trainer.jpg'),
    new Trainer('Alice Brown', 28, 'Pilates', 300, 'assets/trainer.jpg'),
    new Trainer('Charlie Davis', 32, 'Boxing', 320, 'assets/trainer.jpg'),
    new Trainer('Eva White', 27, 'Zumba', 250, 'assets/trainer.jpg'),
    new Trainer('Frank Green', 40, 'Martial Arts', 270, 'assets/trainer.jpg'),
    new Trainer('Grace Lee', 29, 'Dance', 390, 'assets/trainer.jpg'),
    new Trainer('Harry Black', 33, 'Weightlifting', 350, 'assets/trainer.jpg'),
    new Trainer('Ivy Miller', 26, 'Spinning', 400, 'assets/trainer.jpg'),
    new Trainer('Jack Taylor', 31, 'Cardio', 250, 'assets/trainer.jpg'),
    new Trainer('Kelly Johnson', 34, 'Bootcamp', 420, 'assets/trainer.jpg'),
    new Trainer('Leo White', 28, 'Functional Training', 320, 'assets/trainer.jpg'),
    new Trainer('Mia Brown', 35, 'Piloxing', 370, 'assets/trainer.jpg'),
    new Trainer('Noah Davis', 29, 'HIIT', 350, 'assets/trainer.jpg'),
    new Trainer('Olivia Green', 32, 'Aerobics', 400, 'assets/trainer.jpg'),

  ];
}
