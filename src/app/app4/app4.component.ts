import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-app4',
  templateUrl: './app4.component.html',
  styleUrls: ['./app4.component.scss']
})
export class App4Component {
  data :any= {val:"12312"};
  constructor(private router:ActivatedRoute){
    this.router.data.subscribe(data => this.data = data);
  }
}
