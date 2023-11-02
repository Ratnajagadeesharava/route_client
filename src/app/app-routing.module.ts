import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App2Component } from './app2/app2.component';
import { App3Component } from './app3/app3.component';
import { App4Component } from './app4/app4.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

  {
    path:'route1',
    component:App2Component
  },

  {
    path:'route3',
    component:App4Component
  },
  {
    path:':id',
    component:App3Component
  },
{
    path:'route2',
    component:App3Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
