import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { BsDropdownModule } from "ngx-bootstrap";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";

import { TrendComponent } from "./trend.component";

import { RouterModule } from "@angular/router";
import { TrendRoutes } from "./trend.routing";

@NgModule({
  declarations: [TrendComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(TrendRoutes)
  ],
  exports: [TrendComponent]
})
export class TrendModule {}
