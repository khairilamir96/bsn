import { Routes } from "@angular/router";

import { TrendComponent } from "./trend.component";

export const TrendRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: TrendComponent
      }
    ]
  }
];
