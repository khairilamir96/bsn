import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { BsDropdownModule } from "ngx-bootstrap";
import { FormsModule } from "@angular/forms";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ModalModule } from "ngx-bootstrap/modal";
import { TabsModule } from 'ngx-bootstrap/tabs';

import { OverviewComponent } from "./overview/overview.component";
import { TransactionComponent } from "./transaction/transaction.component";
import { RiskComponent } from "./risk/risk.component";

import { RouterModule } from "@angular/router";
import { FraudRoutes } from "./fraud.routing";
@NgModule({
  declarations: [
    OverviewComponent,
    TransactionComponent,
    RiskComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FraudRoutes),
    BsDropdownModule.forRoot(),
    NgxDatatableModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    FormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
  ]
})
export class FraudModule {}
