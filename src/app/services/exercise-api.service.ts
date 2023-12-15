import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exercise} from "../models/Exercise";

@Injectable({
  providedIn: 'root'
})
export class ExerciseApiService {

  public workoutPlan : Exercise[] = [];
  private apiUrl : string = "http://api.api-ninjas.com/v1/exercises?difficulty=beginner";
  constructor(private httpClient: HttpClient) { }

  public getExercises() {
    this.httpClient.get<any[]>(this.apiUrl, {
      headers: new HttpHeaders({
        "X-Api-Key": "k7HAHRc2R8JkbEjAgYVVPA==gDee1S5elsY9G9PS"
      })
    }).subscribe(exercises => {
      if (exercises && exercises.length > 0) {
        let currentId = 0;
        exercises.forEach(exercise => {
          this.workoutPlan.push({
            id: currentId++,
            name: exercise.name,
            muscle: exercise.muscle,
            equipment: exercise.equipment,
            instructions: exercise.instructions
          });
        });
      } else {
        console.error('Invalid or empty data format:', exercises);
      }
    });
  }
  public deleteExercise(idToDelete : number) {
    this.workoutPlan = this.workoutPlan.filter(e => e.id != idToDelete);
  }

}
