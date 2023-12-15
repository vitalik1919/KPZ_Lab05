import { Component } from '@angular/core';
import {ExerciseApiService} from "../../services/exercise-api.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-exercise-plan',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './exercise-plan.component.html',
  styleUrl: './exercise-plan.component.css'
})
export class ExercisePlanComponent {
  constructor(public service : ExerciseApiService) {
    this.service.getExercises();
    console.log(this.service.workoutPlan);
  }
}
