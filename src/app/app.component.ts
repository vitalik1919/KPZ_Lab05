import {Component, ElementRef, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavMenuComponent} from "./components/nav-menu/nav-menu.component";
import {SubscriptionComponent} from "./components/subscription/subscription.component";
import {TrainerComponent} from "./components/trainer/trainer.component";
import {HomeComponent} from "./components/home/home.component";
import {SubTypePipe} from "./pipes/sub-type.pipe";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeaderInterceptor} from "./Interceptors/header.interceptor";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, NavMenuComponent,
    SubscriptionComponent, TrainerComponent, HomeComponent,
    SubTypePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    }
  ]
})
export class AppComponent {
  title = 'Gymrat';

}
