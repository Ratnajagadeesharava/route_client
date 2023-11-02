import { APP_INITIALIZER, NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App2Component } from './app2/app2.component';
import { App3Component } from './app3/app3.component';
import { App4Component } from './app4/app4.component';
import { FormsModule } from '@angular/forms';
import { Observable, Subscription, firstValueFrom, map } from 'rxjs';
import { Router, Routes } from '@angular/router';
import { ModifierDirective } from './modifier.directive';

function InitializeRoutes(http:HttpClient,router:Router) {
  return ():Observable<any>=>
     http.get("http://localhost:4000/api/getlinks").pipe(map((data: any) => {
      const routes: Routes = data.map((routeData: any) => ({
        path: routeData.path,
        component: App4Component,
        data: { val: routeData.data },
      }));

      router.config.push(...routes);
    }));


}

@NgModule({
  declarations: [
    AppComponent,
    App2Component,
    App3Component,
    App4Component,
    ModifierDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: InitializeRoutes,
      deps: [HttpClient,Router],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


