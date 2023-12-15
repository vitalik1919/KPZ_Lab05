import {Component, Input} from '@angular/core';
import EventEmitter from "events";
import {Router} from "@angular/router";
import {EntityApiService} from "../../services/entity-api.service";

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {

  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
