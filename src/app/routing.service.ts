import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router:Router) { }
  configureRoutes(routes: Routes) {
    this.router.config.push(...routes);
  }
}
