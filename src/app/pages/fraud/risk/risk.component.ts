import { Component, Inject, NgZone, PLATFORM_ID,TemplateRef,OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import { isPlatformBrowser } from '@angular/common';
import List from "list.js";
export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}
@Component({
  selector: "app-risk",
  templateUrl: "risk.component.html"
})
export class RiskComponent{
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  temp2 = [];
  activeRow: any;
  rows: any = [
    {
      no:"1",
      rule: 'Covid',
      description: 'Cash Eq Deposits Profile deviation<br>Excessive Short Period ATM Withdrawals.',
      datecreated: '1/1/2020',
      datepublished: '2/1/2020',
    },
    {
      no:"2",
      rule: 'Food Industry',
      description: 'Cash Eq Deposits Profile deviation<br>Excessive Short Period ATM Withdrawals.',
      datecreated: '11/1/2020',
      datepublished: '12/1/2020',
    },
    {
      no:"3",
      rule: 'Malaysia Economy',
      description: 'Cash Eq Deposits Profile deviation<br>Excessive Short Period ATM Withdrawals.',
      datecreated: '1/11/2020',
      datepublished: '2/12/2020',
    },
    {
      no:"4",
      rule: 'Harimau Malaya',
      description: 'Cash Eq Deposits Profile deviation<br>Excessive Short Period ATM Withdrawals.',
      datecreated: '5/8/2020',
      datepublished: '2/9/2020',
    },
    {
      no:"5",
      rule: 'Road Hole',
      description: 'Cash Eq Deposits Profile deviation<br>Excessive Short Period ATM Withdrawals.',
      datecreated: '6/3/2020',
      datepublished: '6/6/2020',
    },
    {
      no:"6",
      rule: 'Moratorium',
      description: 'Cash Eq Deposits Profile deviation<br>Excessive Short Period ATM Withdrawals.',
      datecreated: '9/9/2020',
      datepublished: '10/10/2020',
    }
  ];

  SelectionType = SelectionType;

  //end datatable
  //modal
  dismissible = true;

  defaultModal: BsModalRef;
  defaultModal2: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };
  public now: Date = new Date();
  private chart: am4charts.XYChart;
  

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone,private modalService: BsModalService) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };
    });
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }
  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }
  //modal
  openDefaultModal(modalDefault: TemplateRef<any>) {
    this.defaultModal = this.modalService.show(modalDefault, this.default);
    }
    openDefaultModal2(modalDefault2: TemplateRef<any>) {
      this.defaultModal2 = this.modalService.show(modalDefault2, this.default);
      }
  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  
  ngAfterViewInit():void {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_material);
      am4core.useTheme(am4themes_animated);
      let chart = am4core.create("chartdiv11", am4charts.PieChart);

      // Add data
      chart.data = [ {
        "country": "Insignificant",
        "litres": 501.9
      }, {
        "country": "Minor",
        "litres": 301.9
      }, {
        "country": "Moderate",
        "litres": 201.1
      }, {
        "country": "Major",
        "litres": 165.8
      } ];

      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;

    });
    this.browserOnly(() => {
      am4core.useTheme(am4themes_material);
      am4core.useTheme(am4themes_animated);
      let chart = am4core.create("chartdiv12", am4charts.PieChart);

      // Let's cut a hole in our Pie chart the size of 40% the radius
        chart.innerRadius = am4core.percent(40);



        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "category";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.innerRadius = 10;
        pieSeries.slices.template.fillOpacity = 0.5;

        pieSeries.slices.template.propertyFields.disabled = "labelDisabled";
        pieSeries.labels.template.propertyFields.disabled = "labelDisabled";
        pieSeries.ticks.template.propertyFields.disabled = "labelDisabled";




        // Add second series
        let pieSeries2 = chart.series.push(new am4charts.PieSeries());
        pieSeries2.dataFields.value = "value";
        pieSeries2.dataFields.category = "category";
        pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
        pieSeries2.slices.template.states.getKey("hover").properties.scale = 1;
        pieSeries2.slices.template.propertyFields.fill = "fill";

        // Add data
        pieSeries2.data = [{
          "category": "Risk",
          "value": 60
        }, {
          "category": "Remaining",
          "value": 30,
          "fill":"#dedede"
        }];




        pieSeries2.adapter.add("innerRadius", function(innerRadius, target){
          return am4core.percent(60);
        })

        pieSeries2.adapter.add("radius", function(innerRadius, target){
          return am4core.percent(80);
        })

    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
  
}
