import { Component } from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {PriceFilterDirective} from "../../directives/price-filter.directive";
import {FormsModule} from "@angular/forms";
import {SubTypePipe} from "../../pipes/sub-type.pipe";
import {Subscription} from "../../models/Subscription";
import {FunctionService} from "../../services/function.service";

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [
    NgForOf,
    PriceFilterDirective,
    CommonModule,
    FormsModule,
    SubTypePipe
  ],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {

  constructor(public service : FunctionService) {

  }
  items: Subscription[] = [

    new Subscription('Morning Monthly', '7:00 AM', '1:00 PM', 770, "assets/subscription.jpg"),
    new Subscription('Afternoon Monthly', '1:00 PM', '5:00 PM', 650, 'assets/subscription.jpg'),
    new Subscription('Evening Monthly', '5:00 PM', '11:00 PM', 800, 'assets/subscription.jpg'),
    new Subscription('Fullday Monthly', '7:00 AM', '11:00 PM', 1150, 'assets/subscription.jpg'),
    new Subscription('Morning Yearly', '7:00 AM', '1:00 PM', 7700, 'assets/subscription.jpg'),
    new Subscription('Afternoon Yearly', '1:00 PM', '5:00 PM', 6500, 'assets/subscription.jpg'),
    new Subscription('Evening Yearly', '5:00 PM', '11:00 PM', 8000, 'assets/subscription.jpg'),
    new Subscription('Fullday Yearly', '7:00 AM', '11:00 PM', 10350, 'assets/subscription.jpg'),
  ];
}
