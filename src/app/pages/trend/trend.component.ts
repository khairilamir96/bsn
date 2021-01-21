import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import * as am4maps from "@amcharts/amcharts4/maps";
import { isPlatformBrowser } from '@angular/common';
import * as L from 'leaflet';
@Component({
  selector: "app-trend",
  templateUrl: "trend.component.html"
})
export class TrendComponent {
  private map;
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
    this.map = L.map('map', {
      center: [ 3.899878, 108.201517 ],
      zoom: 6
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  tiles.addTo(this.map);
  // add marker
    var marker = new L.Marker(new L.LatLng(3.139003, 101.686852));
    marker.addTo(this.map).bindPopup("<b>Kuala Lumpur</b>").openPopup();
    var marker = new L.Marker(new L.LatLng(5.978840, 116.075317));
    marker.addTo(this.map).bindPopup("<b>Sabah</b>").openPopup();
    var marker = new L.Marker(new L.LatLng(6.124785, 102.254379));
    marker.addTo(this.map).bindPopup("<b>Kota Bharu</b>").openPopup();
    // add circle
        var circle = new L.Circle(new L.LatLng(3.139003, 101.686852), 500, {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 1.5
        }).addTo(this.map).bindPopup("Kuala Lumpur: 15 cases");
        var circle = new L.Circle(new L.LatLng(5.978840, 116.075317), 500, {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5
        }).addTo(this.map).bindPopup("Sabah: 5 cases");
        var circle = new L.Circle(new L.LatLng(6.124785, 102.254379), 500, {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5
        }).addTo(this.map).bindPopup("Kota Bharu: 7 cases");
        var circle = new L.Circle(new L.LatLng(5.416393, 100.332680), 500, {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5
        }).addTo(this.map).bindPopup("Pulau Pinang:6 cases");
        var circle = new L.Circle(new L.LatLng(4.693950, 101.117577), 500, {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5
        }).addTo(this.map).bindPopup("Perak:6 cases");
        var circle = new L.Circle(new L.LatLng(6.443589, 100.216599), 500, {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5
        }).addTo(this.map).bindPopup("Perlis:2 cases");
        var circle = new L.Circle(new L.LatLng(3.763386, 103.220184), 500, {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5
        }).addTo(this.map).bindPopup("Kuantan:20 cases");
        var circle = new L.Circle(new L.LatLng(5.076600, 	103.014091), 500, {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5
        }).addTo(this.map).bindPopup("Terengganu:4 cases");
    // add polygon
    var latlongs : L.LatLng[];
    latlongs= [
        new L.LatLng(4.693950, 101.117577),
        new L.LatLng(5.285153, 	100.456238),
        new L.LatLng(6.443589, 	100.216599)
    ];
    var polygon = new L.Polygon(latlongs).addTo(this.map).bindPopup("Target Area");

    // popup on mapclick
    var popup = new L.Popup();
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_material);
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv13", am4charts.XYChart);

      chart.data = [{
        "year": "2010",
        "cars": 1587,
        "motorcycles": 650,
        "bicycles": 121
      }, {
        "year": "2011",
        "cars": 1567,
        "motorcycles": 683,
        "bicycles": 146
      }, {
        "year": "2012",
        "cars": 1617,
        "motorcycles": 691,
        "bicycles": 138
      }, {
        "year": "2013",
        "cars": 1630,
        "motorcycles": 642,
        "bicycles": 127
      }, {
        "year": "2014",
        "cars": 1660,
        "motorcycles": 699,
        "bicycles": 105
      }, {
        "year": "2015",
        "cars": 1683,
        "motorcycles": 721,
        "bicycles": 109
      }, {
        "year": "2016",
        "cars": 1691,
        "motorcycles": 737,
        "bicycles": 112
      }, {
        "year": "2017",
        "cars": 1298,
        "motorcycles": 680,
        "bicycles": 101
      }, {
        "year": "2018",
        "cars": 1275,
        "motorcycles": 664,
        "bicycles": 97
      }, {
        "year": "2019",
        "cars": 1246,
        "motorcycles": 648,
        "bicycles": 93
      }, {
        "year": "2020",
        "cars": 1318,
        "motorcycles": 697,
        "bicycles": 111
      }, {
        "year": "2021",
        "cars": 1213,
        "motorcycles": 633,
        "bicycles": 87
      }];

      chart.dateFormatter.inputDateFormat = "yyyy";
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;
      dateAxis.startLocation = 0.5;
      dateAxis.endLocation = 0.5;
      dateAxis.baseInterval = {
        timeUnit: "year",
        count: 1
      }

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "year";
      series.name = "Fraud Loss";
      series.dataFields.valueY = "cars";
      series.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
      series.tooltipText = "[#000]{valueY.value}[/]";
      series.tooltip.background.fill = am4core.color("#FFF");
      series.tooltip.getStrokeFromObject = true;
      series.tooltip.background.strokeWidth = 3;
      series.tooltip.getFillFromObject = false;
      series.fillOpacity = 0.6;
      series.strokeWidth = 2;
      series.stacked = true;

      let series2 = chart.series.push(new am4charts.LineSeries());
      series2.name = "New Memberships";
      series2.dataFields.dateX = "year";
      series2.dataFields.valueY = "motorcycles";
      series2.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
      series2.tooltipText = "[#000]{valueY.value}[/]";
      series2.tooltip.background.fill = am4core.color("#FFF");
      series2.tooltip.getFillFromObject = false;
      series2.tooltip.getStrokeFromObject = true;
      series2.tooltip.background.strokeWidth = 3;
      series2.sequencedInterpolation = true;
      series2.fillOpacity = 0.6;
      series2.stacked = true;
      series2.strokeWidth = 2;

      let series3 = chart.series.push(new am4charts.LineSeries());
      series3.name = "Fraud Memberships";
      series3.dataFields.dateX = "year";
      series3.dataFields.valueY = "bicycles";
      series3.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
      series3.tooltipText = "[#000]{valueY.value}[/]";
      series3.tooltip.background.fill = am4core.color("#FFF");
      series3.tooltip.getFillFromObject = false;
      series3.tooltip.getStrokeFromObject = true;
      series3.tooltip.background.strokeWidth = 3;
      series3.sequencedInterpolation = true;
      series3.fillOpacity = 0.6;
      series3.defaultState.transitionDuration = 1000;
      series3.stacked = true;
      series3.strokeWidth = 2;

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.xAxis = dateAxis;
      chart.scrollbarX = new am4core.Scrollbar();

      // Add a legend
      chart.legend = new am4charts.Legend();
      chart.legend.position = "top";

      // axis ranges
      let range = dateAxis.axisRanges.create();
      range.date = new Date(2001, 0, 1);
      range.endDate = new Date(2003, 0, 1);
      range.axisFill.fill = chart.colors.getIndex(7);
      range.axisFill.fillOpacity = 0.2;

      range.label.text = "";
      range.label.inside = true;
      range.label.rotation = 90;
      range.label.horizontalCenter = "right";
      range.label.verticalCenter = "bottom";

      let range2 = dateAxis.axisRanges.create();
      range2.date = new Date(2007, 0, 1);
      range2.grid.stroke = chart.colors.getIndex(7);
      range2.grid.strokeOpacity = 0.6;
      range2.grid.strokeDasharray = "5,2";


      range2.label.text = "";
      range2.label.inside = true;
      range2.label.rotation = 90;
      range2.label.horizontalCenter = "right";
      range2.label.verticalCenter = "bottom";

    });
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv14", am4charts.XYChart);

      // Add data
      chart.data = [{
        "year": 2015,
        "income": 29,
        "expenses": 30
      },{
        "year": 2016,
        "income": 26,
        "expenses": 28
      },{
        "year": 2017,
        "income": 30,
        "expenses": 29
      },{
        "year": 2018,
        "income": 36,
        "expenses": 33
      },{
        "year": 2019,
        "income": 34,
        "expenses": 27
      }];

      // Create axes
      let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.numberFormatter.numberFormat = "#";
      categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.cellStartLocation = 0.1;
      categoryAxis.renderer.cellEndLocation = 0.9;

      let  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
      valueAxis.renderer.opposite = true;

      // Create series
      function createSeries(field, name) {
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = field;
        series.dataFields.categoryY = "year";
        series.name = name;
        series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
        series.columns.template.height = am4core.percent(100);
        series.sequencedInterpolation = true;

        let valueLabel = series.bullets.push(new am4charts.LabelBullet());
        valueLabel.label.text = "{valueX}";
        valueLabel.label.horizontalCenter = "left";
        valueLabel.label.dx = 10;
        valueLabel.label.hideOversized = false;
        valueLabel.label.truncate = false;

        let categoryLabel = series.bullets.push(new am4charts.LabelBullet());
        categoryLabel.label.text = "{name}";
        categoryLabel.label.horizontalCenter = "right";
        categoryLabel.label.dx = -10;
        categoryLabel.label.fill = am4core.color("#fff");
        categoryLabel.label.hideOversized = false;
        categoryLabel.label.truncate = false;
      }

      createSeries("income", "Male");
      createSeries("expenses", "Female");

    });
    this.browserOnly(() => {
      am4core.useTheme(am4themes_kelly);
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv15", am4charts.XYChart);
      chart.scrollbarX = new am4core.Scrollbar();

      // Add data
      chart.data = [{
        "country": "Laptop",
        "visits": 3025
      }, {
        "country": "MacBook",
        "visits": 1882
      }, {
        "country": "Smartphone",
        "visits": 4000
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
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv16", am4charts.XYChart);
      chart.scrollbarX = new am4core.Scrollbar();

      // Add data
      chart.data = [{
        "country": "Cash",
        "visits": 3025
      }, {
        "country": "Checks",
        "visits": 1882
      }, {
        "country": "Debit Cards",
        "visits": 1809
      }, {
        "country": "Credit Cards",
        "visits": 1322
      }, {
        "country": "Mobile Payments",
        "visits": 1122
      }, {
        "country": "Electronic Bank Transfers",
        "visits": 1114
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
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv17", am4charts.XYChart);
      chart.scrollbarX = new am4core.Scrollbar();

      // Add data
      chart.data = [{
        "country": "Pahang",
        "visits": 3025
      }, {
        "country": "Johor",
        "visits": 1882
      }, {
        "country": "Perak",
        "visits": 1809
      }, {
        "country": "Melaka",
        "visits": 1322
      }, {
        "country": "Kelantan",
        "visits": 1122
      }, {
        "country": "Selangor",
        "visits": 1114
      }, {
        "country": "KUala Lumpur",
        "visits": 984
      }, {
        "country": "Sabah",
        "visits": 2000
      }, {
        "country": "Sarawak",
        "visits": 1500
      }, {
        "country": "Kedah",
        "visits": 1322
      }, {
        "country": "Terengganu",
        "visits": 1300
      }, {
        "country": "P.Pinang",
        "visits": 1114
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
