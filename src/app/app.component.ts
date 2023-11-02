import { Component } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { App4Component } from './app4/app4.component';
import { HttpClient } from '@angular/common/http';
import { RoutingService } from './routing.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'router_adventure';
  dynamicRouter=["router_adventure"]
  components = [App4Component];
  routeModel :string = "";
  dataModel:string = "";
  routes:Routes=[];
  /**
   *
   */
  constructor(private router: Router, private httpClient:HttpClient,private routingService:RoutingService) {
    console.log(router);
    this.getRoutes();
    this.router.config.push({path:this.dynamicRouter[0],component:this.components[0],data:{val:"hello dynamic Component"}})

  }
  navigateDynamicRoute(route:Route){
    this.router.navigate(["/"+route.path]);
  }
  addRoute(){
    this.dynamicRouter.push(this.routeModel);
    this.router.config.push({path:this.routeModel,component:this.components[0],data:{val:this.dataModel}});
  }
  getRoutes(){
    this.httpClient.get("http://localhost:4000/api/getlinks").subscribe((data:any) =>{
      this.routes = data.map((routeData: any) => ({
        path: routeData.path,
        component: this.components[0],
        data: { val: routeData.data },
      }));
      this.routingService.configureRoutes(this.routes);
    })
  }
}
