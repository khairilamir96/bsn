import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { isPlatformBrowser } from '@angular/common';
export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}
@Component({
  selector: "app-transaction",
  templateUrl: "transaction.component.html"
})
export class TransactionComponent {
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      customer: 'Amir<br>ID: 41023232 <br>Staff: Yes',
      alert: 'ID: 35437657000<br>Alert Date:19/8/2020<br>Due Date: in 30 days',
      alertlevel: 'L3<br>70%',
      segment: 'Name:PFS-Mass<br>Code:PFS-M',
      account: '3543079851SGD<br>Type:D<br>Open Date: 12/4/2020',
      rules: 'Cash Eq Deposits Profile.Excessive Short Period ATM Withdrawals.',
      investigator: 'James Hardon<br>Alert Closure Date:12/5/2020<br>Status:Closed',
    },
    {
      customer: 'Wan<br>ID: 41023555 <br>Staff: Yes',
      alert: 'ID: 35437657456<br>Alert Date:19/7/2020<br>Due Date: in 30 days',
      alertlevel: 'L3<br>75%',
      segment: 'Name:PFS-Mass<br>Code:PFS-M',
      account: '3543079850SGD<br>Type:D<br>Open Date: 12/4/2020',
      rules: 'Cash Eq Deposits Profile.Excessive Short Period ATM Withdrawals.',
      investigator: 'James Hardon<br>Alert Closure Date:12/5/2020<br>Status:Closed',
    },
    {
      customer: 'Afiq<br>ID: 41023123 <br>Staff: Yes',
      alert: 'ID: 35437657056<br>Alert Date:23/4/2020<br>Due Date: in 30 days',
      alertlevel: 'L2<br>50%',
      segment: 'Name:PFS-Mass<br>Code:PFS-M',
      account: '3543079840SGD<br>Type:D<br>Open Date: 8/9/2020',
      rules: 'Cash Eq Deposits Profile.Excessive Short Period ATM Withdrawals.',
      investigator: 'James Hardon<br>Alert Closure Date:12/5/2020<br>Status:Closed',
    },
    {
      customer: 'Yoges<br>ID: 41023789 <br>Staff: No',
      alert: 'ID: 35437657123<br>Alert Date:1/1/2020<br>Due Date: in 30 days',
      alertlevel: 'L1<br>20%',
      segment: 'Name:PFS-Mass<br>Code:PFS-M',
      account: '3543079543SGD<br>Type:D<br>Open Date: 2/2/2020',
      rules: 'Cash Eq Deposits Profile.Excessive Short Period ATM Withdrawals.',
      investigator: 'James Hardon<br>Alert Closure Date:12/5/2020<br>Status:Closed',
    },
    {
      customer: 'Ali<br>ID: 41023232 <br>Staff: Yes',
      alert: 'ID: 35437657051<br>Alert Date:12/9/2020<br>Due Date: in 30 days',
      alertlevel: 'L3<br>80%',
      segment: 'Name:PFS-Mass<br>Code:PFS-M',
      account: '3543079851SGD<br>Type:D<br>Open Date: 1/4/2020',
      rules: 'Cash Eq Deposits Profile.Excessive Short Period ATM Withdrawals.',
      investigator: 'James Hardon<br>Alert Closure Date:12/5/2020<br>Status:Closed',
    },
    {
      customer: 'Asyraf<br>ID: 41023888 <br>Staff: No',
      alert: 'ID: 354376570289<br>Alert Date:9/9/2020<br>Due Date: in 30 days',
      alertlevel: 'L2<br>40%',
      segment: 'Name:PFS-Mass<br>Code:PFS-M',
      account: '3543079866SGD<br>Type:D<br>Open Date: 12/5/2020',
      rules: 'Cash Eq Deposits Profile.Excessive Short Period ATM Withdrawals.',
      investigator: 'James Hardon<br>Alert Closure Date:12/5/2020<br>Status:Closed',
    }
  ];
  SelectionType = SelectionType;

  //end datatable
  public now: Date = new Date();
  private chart: am4charts.XYChart;
  

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {
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
      am4core.useTheme(am4themes_animated);

      // Create chart instance
        let chart = am4core.create("chartdiv9", am4charts.XYChart);
        chart.scrollbarX = new am4core.Scrollbar();

        // Add data
        chart.data = [{
          "country": "USA",
          "visits": 3025
        }, {
          "country": "China",
          "visits": 1882
        }, {
          "country": "Japan",
          "visits": 1809
        }, {
          "country": "Germany",
          "visits": 1322
        }, {
          "country": "UK",
          "visits": 1122
        }, {
          "country": "France",
          "visits": 1114
        }, {
          "country": "India",
          "visits": 984
        }, {
          "country": "Spain",
          "visits": 711
        }, {
          "country": "Netherlands",
          "visits": 665
        }, {
          "country": "Russia",
          "visits": 580
        }, {
          "country": "South Korea",
          "visits": 443
        }, {
          "country": "Canada",
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
      am4core.useTheme(am4themes_animated);
      let chart = am4core.create("chartdiv10", am4charts.PieChart);

      // Add data
      chart.data = [ {
        "country": "Rule 1",
        "litres": 501.9
      }, {
        "country": "Rule 2",
        "litres": 301.9
      }, {
        "country": "Rule 3",
        "litres": 201.1
      }, {
        "country": "Rule 4",
        "litres": 165.8
      }, {
        "country": "Rule 5",
        "litres": 139.9
      }, {
        "country": "Rule 6",
        "litres": 128.3
      }, {
        "country": "Rule 7",
        "litres": 99
      }, {
        "country": "Rule 8",
        "litres": 60
      }, {
        "country": "Rule 9",
        "litres": 50
      }, {
        "country": "Rule 10",
        "litres": 10
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
