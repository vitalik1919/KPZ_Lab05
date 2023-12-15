import { Routes } from '@angular/router';
import {SubscriptionComponent} from "./components/subscription/subscription.component";
import {TrainerComponent} from "./components/trainer/trainer.component";
import {HomeComponent} from "./components/home/home.component";
import {ExercisePlanComponent} from "./components/exercise-plan/exercise-plan.component";

export const routes: Routes = [
  { path: '',               component: HomeComponent},
  { path: 'subscriptions',  component: SubscriptionComponent },
  { path: 'trainers',       component: TrainerComponent },
  { path: 'workout-plan',  component: ExercisePlanComponent}
];
