import { Routes } from "@angular/router";

import { OverviewComponent } from "./overview/overview.component";
import { TransactionComponent } from "./transaction/transaction.component";
import { RiskComponent } from "./risk/risk.component";

export const FraudRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "overview",
        component: OverviewComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "transaction",
        component: TransactionComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "risk",
        component: RiskComponent
      }
    ]
  }
];
