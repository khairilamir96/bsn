import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { isPlatformBrowser } from '@angular/common';
import * as L from 'leaflet';
@Component({
  selector: "app-overview",
  templateUrl: "overview.component.html"
})
export class OverviewComponent {
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
    // Chart code goes in here
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
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv7", am4charts.XYChart);

      // Increase contrast by taking evey second color
      chart.colors.step = 2;

      // Add data
      chart.data = generateChartData();

      // Create axes
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 50;

      // Create series
      function createAxisAndSeries(field, name, opposite, bullet) {
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis() as any);
        if(chart.yAxes.indexOf(valueAxis) != 0){
          valueAxis.syncWithAxis = chart.yAxes.getIndex(0);
        }
        
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = field;
        series.dataFields.dateX = "date";
        series.strokeWidth = 2;
        series.yAxis = valueAxis;
        series.name = name;
        series.tooltipText = "{name}: [bold]{valueY}[/]";
        series.tensionX = 0.8;
        series.showOnInit = true;
        
        let interfaceColors = new am4core.InterfaceColorSet();
        
        switch(bullet) {
          case "triangle":
            let bullet1 = series.bullets.push(new am4charts.Bullet()as any);
            bullet1.width = 12;
            bullet1.height = 12;
            bullet1.horizontalCenter = "middle";
            bullet1.verticalCenter = "middle";
            
            let triangle = bullet1.createChild(am4core.Triangle);
            triangle.stroke = interfaceColors.getFor("background");
            triangle.strokeWidth = 2;
            triangle.direction = "top";
            triangle.width = 12;
            triangle.height = 12;
            break;
          case "rectangle":
            let bullet2 = series.bullets.push(new am4charts.Bullet());
            bullet2.width = 10;
            bullet2.height = 10;
            bullet2.horizontalCenter = "middle";
            bullet2.verticalCenter = "middle";
            
            let rectangle = bullet2.createChild(am4core.Rectangle);
            rectangle.stroke = interfaceColors.getFor("background");
            rectangle.strokeWidth = 2;
            rectangle.width = 10;
            rectangle.height = 10;
            break;
          default:
            let bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.stroke = interfaceColors.getFor("background");
            bullet.circle.strokeWidth = 2;
            break;
        }
        
        valueAxis.renderer.line.strokeOpacity = 1;
        valueAxis.renderer.line.strokeWidth = 2;
        valueAxis.renderer.line.stroke = series.stroke;
        valueAxis.renderer.labels.template.fill = series.stroke;
        valueAxis.renderer.opposite = opposite;
      }

      createAxisAndSeries("visits", "", false, "circle");
      createAxisAndSeries("views", "", true, "triangle");
      createAxisAndSeries("hits", "", true, "rectangle");

      // Add legend
      chart.legend = new am4charts.Legend();

      // Add cursor
      chart.cursor = new am4charts.XYCursor();

      // generate some random data, quite different range
      function generateChartData() {
        let chartData = [];
        let firstDate = new Date();
        firstDate.setDate(firstDate.getDate() - 100);
        firstDate.setHours(0, 0, 0, 0);

        let visits = 1600;
        let hits = 2900;
        let views = 8700;

        for (var i = 0; i < 15; i++) {
          // we create date objects here. In your data, you can have date strings
          // and then set format of your dates using chart.dataDateFormat property,
          // however when possible, use date objects, as this will speed up chart rendering.
          let newDate = new Date(firstDate);
          newDate.setDate(newDate.getDate() + i);

          visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
          hits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
          views += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

          chartData.push({
            date: newDate,
            visits: visits,
            hits: hits,
            views: views
          });
        }
        return chartData;
      }

    });
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);
      let chart = am4core.create("chartdiv8", am4charts.XYChart);

      let data = [];
      let price1 = 1000, price2 = 1200;
      let quantity = 30000;
      for (var i = 0; i < 360; i++) {
        price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
        data.push({ date1: new Date(2015, 0, i), price1: price1 });
      }
      for (var i = 0; i < 360; i++) {
        price2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
        data.push({ date2: new Date(2017, 0, i), price2: price2 });
      }

      chart.data = data;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.labels.template.fill = am4core.color("#e59165");

      let dateAxis2 = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis2.renderer.grid.template.location = 0;
      dateAxis2.renderer.labels.template.fill = am4core.color("#dfcc64");

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.labels.template.fill = am4core.color("#e59165");

      valueAxis.renderer.minWidth = 60;

      let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis2.tooltip.disabled = true;
      valueAxis2.renderer.labels.template.fill = am4core.color("#dfcc64");
      valueAxis2.renderer.minWidth = 60;
      valueAxis2.syncWithAxis = valueAxis;

      let series = chart.series.push(new am4charts.LineSeries());
      series.name = "2015";
      series.dataFields.dateX = "date1";
      series.dataFields.valueY = "price1";
      series.tooltipText = "{valueY.value}";
      series.fill = am4core.color("#e59165");
      series.stroke = am4core.color("#e59165");
      //series.strokeWidth = 3;

      let series2 = chart.series.push(new am4charts.LineSeries());
      series2.name = "2017";
      series2.dataFields.dateX = "date2";
      series2.dataFields.valueY = "price2";
      series2.yAxis = valueAxis2;
      series2.xAxis = dateAxis2;
      series2.tooltipText = "{valueY.value}";
      series2.fill = am4core.color("#dfcc64");
      series2.stroke = am4core.color("#dfcc64");
      //series2.strokeWidth = 3;

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.xAxis = dateAxis2;

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      chart.legend = new am4charts.Legend();
      chart.legend.parent = chart.plotContainer;
      chart.legend.zIndex = 100;

      valueAxis2.renderer.grid.template.strokeOpacity = 0.07;
      dateAxis2.renderer.grid.template.strokeOpacity = 0.07;
      dateAxis.renderer.grid.template.strokeOpacity = 0.07;
      valueAxis.renderer.grid.template.strokeOpacity = 0.07;


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
