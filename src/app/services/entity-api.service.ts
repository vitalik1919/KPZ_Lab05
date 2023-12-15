import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntityApiService { // t

  private apiUrl = 'https://localhost:7143/api/';
  constructor(private http: HttpClient) { }

  public getSubscriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}subscriptions`, { withCredentials: true });
  }
  public getTrainers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}Trainer`, { withCredentials: true });
  }
}
