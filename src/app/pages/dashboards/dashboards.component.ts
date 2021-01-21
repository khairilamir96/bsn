import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_frozen from "@amcharts/amcharts4/themes/frozen";
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: "app-dashboards",
  templateUrl: "dashboards.component.html"
})
export class DashboardsComponent {
  public now: Date = new Date();
  private chart: am4charts.XYChart;
  

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {
    setInterval(() => {
      this.now = new Date();
    }, 1);
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

      let chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.scrollbarX = new am4core.Scrollbar();

      // Add data
      chart.data = [{
        "country": "JAN",
        "visits": 3025
      }, {
        "country": "FEB",
        "visits": 1882
      }, {
        "country": "MAR",
        "visits": 1809
      }, {
        "country": "APR",
        "visits": 1322
      }, {
        "country": "MAY",
        "visits": 1122
      }, {
        "country": "JUN",
        "visits": 1114
      }, {
        "country": "JUL",
        "visits": 984
      }, {
        "country": "AUG",
        "visits": 711
      }, {
        "country": "SEP",
        "visits": 665
      }, {
        "country": "OCT",
        "visits": 580
      }, {
        "country": "NOV",
        "visits": 443
      }, {
        "country": "DEC",
        "visits": 441
      }];

      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.renderer.labels.template.horizontalCenter = "right";
      categoryAxis.renderer.labels.template.verticalCenter = "middle";
      categoryAxis.renderer.labels.template.rotation = 270;
      categoryAxis.tooltip.disabled = true;
      categoryAxis.renderer.minHeight = 110;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.minWidth = 50;

      // Create series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.sequencedInterpolation = true;
      series.dataFields.valueY = "visits";
      series.dataFields.categoryX = "country";
      series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
      series.columns.template.strokeWidth = 0;

      series.tooltip.pointerOrientation = "vertical";

      series.columns.template.column.cornerRadiusTopLeft = 10;
      series.columns.template.column.cornerRadiusTopRight = 10;
      series.columns.template.column.fillOpacity = 0.8;

      // on hover, make corner radiuses bigger
      let hoverState = series.columns.template.column.states.create("hover");
      hoverState.properties.cornerRadiusTopLeft = 0;
      hoverState.properties.cornerRadiusTopRight = 0;
      hoverState.properties.fillOpacity = 1;

      series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

      // Cursor
      chart.cursor = new am4charts.XYCursor();

    });
    this.browserOnly(() => {
      am4core.useTheme(am4themes_material);
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv1", am4charts.XYChart);
      chart.scrollbarX = new am4core.Scrollbar();

      // Add data
      chart.data = [{
        "country": "MON",
        "visits": 3025
      }, {
        "country": "TUE",
        "visits": 1882
      }, {
        "country": "WED",
        "visits": 1809
      }, {
        "country": "THU",
        "visits": 1322
      }, {
        "country": "FRI",
        "visits": 1122
      }, {
        "country": "SAT",
        "visits": 1114
      }, {
        "country": "SUN",
        "visits": 984
      }];

      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.renderer.labels.template.horizontalCenter = "right";
      categoryAxis.renderer.labels.template.verticalCenter = "middle";
      categoryAxis.renderer.labels.template.rotation = 270;
      categoryAxis.tooltip.disabled = true;
      categoryAxis.renderer.minHeight = 110;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.minWidth = 50;

      // Create series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.sequencedInterpolation = true;
      series.dataFields.valueY = "visits";
      series.dataFields.categoryX = "country";
      series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
      series.columns.template.strokeWidth = 0;

      series.tooltip.pointerOrientation = "vertical";

      series.columns.template.column.cornerRadiusTopLeft = 10;
      series.columns.template.column.cornerRadiusTopRight = 10;
      series.columns.template.column.fillOpacity = 0.8;

      // on hover, make corner radiuses bigger
      let hoverState = series.columns.template.column.states.create("hover");
      hoverState.properties.cornerRadiusTopLeft = 0;
      hoverState.properties.cornerRadiusTopRight = 0;
      hoverState.properties.fillOpacity = 1;

      series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

      // Cursor
      chart.cursor = new am4charts.XYCursor();

    });
    this.browserOnly(() => {
      am4core.useTheme(am4themes_kelly);
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv2", am4charts.XYChart);
      chart.scrollbarX = new am4core.Scrollbar();

      // Add data
      chart.data = [{
        "country": "12:00",
        "visits": 3025
      }, {
        "country": "13:00",
        "visits": 1882
      }, {
        "country": "14:00",
        "visits": 1809
      }, {
        "country": "15:00",
        "visits": 1322
      }, {
        "country": "16:00",
        "visits": 1122
      }, {
        "country": "17:00",
        "visits": 1114
      }, {
        "country": "18:00",
        "visits": 984
      }];

      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.renderer.labels.template.horizontalCenter = "right";
      categoryAxis.renderer.labels.template.verticalCenter = "middle";
      categoryAxis.renderer.labels.template.rotation = 270;
      categoryAxis.tooltip.disabled = true;
      categoryAxis.renderer.minHeight = 110;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.minWidth = 50;

      // Create series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.sequencedInterpolation = true;
      series.dataFields.valueY = "visits";
      series.dataFields.categoryX = "country";
      series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
      series.columns.template.strokeWidth = 0;

      series.tooltip.pointerOrientation = "vertical";

      series.columns.template.column.cornerRadiusTopLeft = 10;
      series.columns.template.column.cornerRadiusTopRight = 10;
      series.columns.template.column.fillOpacity = 0.8;

      // on hover, make corner radiuses bigger
      let hoverState = series.columns.template.column.states.create("hover");
      hoverState.properties.cornerRadiusTopLeft = 0;
      hoverState.properties.cornerRadiusTopRight = 0;
      hoverState.properties.fillOpacity = 1;

      series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

      // Cursor
      chart.cursor = new am4charts.XYCursor();

    });
    this.browserOnly(() => {
      am4core.useTheme(am4themes_kelly);
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv3", am4charts.XYChart);
      chart.scrollbarX = new am4core.Scrollbar();

      // Add data
      chart.data = [{
        "country": "12:00",
        "visits": 3025
      }, {
        "country": "13:00",
        "visits": 1882
      }, {
        "country": "14:00",
        "visits": 1809
      }, {
        "country": "15:00",
        "visits": 1322
      }, {
        "country": "16:00",
        "visits": 1122
      }, {
        "country": "17:00",
        "visits": 1114
      }, {
        "country": "18:00",
        "visits": 984
      }];

      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.renderer.labels.template.horizontalCenter = "right";
      categoryAxis.renderer.labels.template.verticalCenter = "middle";
      categoryAxis.renderer.labels.template.rotation = 270;
      categoryAxis.tooltip.disabled = true;
      categoryAxis.renderer.minHeight = 110;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.minWidth = 50;

      // Create series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.sequencedInterpolation = true;
      series.dataFields.valueY = "visits";
      series.dataFields.categoryX = "country";
      series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
      series.columns.template.strokeWidth = 0;

      series.tooltip.pointerOrientation = "vertical";

      series.columns.template.column.cornerRadiusTopLeft = 10;
      series.columns.template.column.cornerRadiusTopRight = 10;
      series.columns.template.column.fillOpacity = 0.8;

      // on hover, make corner radiuses bigger
      let hoverState = series.columns.template.column.states.create("hover");
      hoverState.properties.cornerRadiusTopLeft = 0;
      hoverState.properties.cornerRadiusTopRight = 0;
      hoverState.properties.fillOpacity = 1;

      series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

      // Cursor
      chart.cursor = new am4charts.XYCursor();

    });
    this.browserOnly(() => {
      am4core.useTheme(am4themes_frozen);
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv4", am4charts.XYChart);
      chart.scrollbarX = new am4core.Scrollbar();

      // Add data
      chart.data = [{
        "country": "MON",
        "visits": 3025
      }, {
        "country": "TUE",
        "visits": 1882
      }, {
        "country": "WED",
        "visits": 1809
      }, {
        "country": "THU",
        "visits": 1322
      }, {
        "country": "FRI",
        "visits": 1122
      }, {
        "country": "SAT",
        "visits": 1114
      }, {
        "country": "SUN",
        "visits": 984
      }];

      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.renderer.labels.template.horizontalCenter = "right";
      categoryAxis.renderer.labels.template.verticalCenter = "middle";
      categoryAxis.renderer.labels.template.rotation = 270;
      categoryAxis.tooltip.disabled = true;
      categoryAxis.renderer.minHeight = 110;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.minWidth = 50;

      // Create series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.sequencedInterpolation = true;
      series.dataFields.valueY = "visits";
      series.dataFields.categoryX = "country";
      series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
      series.columns.template.strokeWidth = 0;

      series.tooltip.pointerOrientation = "vertical";

      series.columns.template.column.cornerRadiusTopLeft = 10;
      series.columns.template.column.cornerRadiusTopRight = 10;
      series.columns.template.column.fillOpacity = 0.8;

      // on hover, make corner radiuses bigger
      let hoverState = series.columns.template.column.states.create("hover");
      hoverState.properties.cornerRadiusTopLeft = 0;
      hoverState.properties.cornerRadiusTopRight = 0;
      hoverState.properties.fillOpacity = 1;

      series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

      // Cursor
      chart.cursor = new am4charts.XYCursor();

    });
    this.browserOnly(() => {
      am4core.useTheme(am4themes_frozen);
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv5", am4charts.XYChart);
      chart.scrollbarX = new am4core.Scrollbar();

      // Add data
      chart.data = [{
        "country": "1",
        "visits": 3025
      }, {
        "country": "2",
        "visits": 1882
      }, {
        "country": "3",
        "visits": 1809
      }, {
        "country": "4",
        "visits": 1322
      }, {
        "country": "5",
        "visits": 1122
      }, {
        "country": "6",
        "visits": 1114
      }, {
        "country": "7",
        "visits": 984
      }];

      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.renderer.labels.template.horizontalCenter = "right";
      categoryAxis.renderer.labels.template.verticalCenter = "middle";
      categoryAxis.renderer.labels.template.rotation = 270;
      categoryAxis.tooltip.disabled = true;
      categoryAxis.renderer.minHeight = 110;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.minWidth = 50;

      // Create series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.sequencedInterpolation = true;
      series.dataFields.valueY = "visits";
      series.dataFields.categoryX = "country";
      series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
      series.columns.template.strokeWidth = 0;

      series.tooltip.pointerOrientation = "vertical";

      series.columns.template.column.cornerRadiusTopLeft = 10;
      series.columns.template.column.cornerRadiusTopRight = 10;
      series.columns.template.column.fillOpacity = 0.8;

      // on hover, make corner radiuses bigger
      let hoverState = series.columns.template.column.states.create("hover");
      hoverState.properties.cornerRadiusTopLeft = 0;
      hoverState.properties.cornerRadiusTopRight = 0;
      hoverState.properties.fillOpacity = 1;

      series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

      // Cursor
      chart.cursor = new am4charts.XYCursor();

    });
    this.browserOnly(() => {
      am4core.useTheme(am4themes_frozen);
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv5", am4charts.XYChart);
      chart.scrollbarX = new am4core.Scrollbar();

      // Add data
      chart.data = [{
        "country": "1",
        "visits": 3025
      }, {
        "country": "2",
        "visits": 1882
      }, {
        "country": "3",
        "visits": 1809
      }, {
        "country": "4",
        "visits": 1322
      }, {
        "country": "5",
        "visits": 1122
      }, {
        "country": "6",
        "visits": 1114
      }, {
        "country": "7",
        "visits": 984
      }];

      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.renderer.labels.template.horizontalCenter = "right";
      categoryAxis.renderer.labels.template.verticalCenter = "middle";
      categoryAxis.renderer.labels.template.rotation = 270;
      categoryAxis.tooltip.disabled = true;
      categoryAxis.renderer.minHeight = 110;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.minWidth = 50;

      // Create series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.sequencedInterpolation = true;
      series.dataFields.valueY = "visits";
      series.dataFields.categoryX = "country";
      series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
      series.columns.template.strokeWidth = 0;

      series.tooltip.pointerOrientation = "vertical";

      series.columns.template.column.cornerRadiusTopLeft = 10;
      series.columns.template.column.cornerRadiusTopRight = 10;
      series.columns.template.column.fillOpacity = 0.8;

      // on hover, make corner radiuses bigger
      let hoverState = series.columns.template.column.states.create("hover");
      hoverState.properties.cornerRadiusTopLeft = 0;
      hoverState.properties.cornerRadiusTopRight = 0;
      hoverState.properties.fillOpacity = 1;

      series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

      // Cursor
      chart.cursor = new am4charts.XYCursor();

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
