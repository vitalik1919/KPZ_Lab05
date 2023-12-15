import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {EntityApiService} from "../../services/entity-api.service";
import {ExerciseApiService} from "../../services/exercise-api.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [
    EntityApiService
  ],
})
export class HomeComponent {

}
