import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexXAxis,
  ApexPlotOptions,
  ApexResponsive,
  ApexLegend,
} from 'ng-apexcharts';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { INVESTMENT_DATA } from './data-series';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

export type GroupedChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgApexchartsModule, MatTableModule, DatePipe, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public stackedChartOptions: Partial<any>;
  public groupChartOptions: Partial<any>;
  public overallChartOptions: Partial<any>;
  displayedColumns: string[] = ['name', 'date', 'amount', 'status'];
  dataSource = INVESTMENT_DATA;

  constructor() {
    this.stackedChartOptions = {
      series: [
        {
          name: 'Stocks',
          data: [10000, 11000, 20000, 5000, 25000, 15000],
        },
        {
          name: 'Large Cap Funds',
          data: [5000, 25000, 15000, 10000, 11000, 20000],
        },
        {
          name: 'Mid Cap Funds',
          data: [5000, 25000, 10000, 11000, 20000, 15000],
        },
        {
          name: 'Small Cap Funds',
          data: [11000, 20000, 5000, 25000, 10000, 15000],
        },
      ],
      chart: {
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      title: {
        text: 'Investment on Stocks and Mutual Funds',
        align: 'left',
      },
      xaxis: {
        type: 'category',
        categories: [
          'Jun, 2024',
          'Jul, 2024',
          'Aug, 2024',
          'Sep, 2024',
          'Oct, 2024',
          'Nov, 2024',
        ],
      },
      legend: {
        position: 'bottom',
      },
      fill: {
        opacity: 1,
      },
    };

    this.groupChartOptions = {
      series: [
        {
          name: 'Invested',
          data: [500000, 2000000, 1000000, 500000, 500000, 1000000, 1000000],
        },
        {
          name: 'Returns',
          data: [1000000, 2500000, 1500000, 700000, 400000, 2000000, 1700000],
        },
      ],
      chart: {
        type: 'bar',
        height: 430,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: 'left',
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      title: {
        text: 'Investment and Returns',
        align: 'left',
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff'],
      },
      xaxis: {
        categories: [
          'Assets',
          'Stocks',
          'Large Cap',
          'Mid Cap',
          'Small Cap',
          'Gold',
          'FD',
        ],
      },
    };

    this.overallChartOptions = {
      series: [15, 25, 20, 25, 5, 20, 25],
      chart: {
        type: 'pie',
      },
      labels: [
        'Assets',
        'Stocks',
        'Large Cap',
        'Mid Cap',
        'Small Cap',
        'Gold',
        'FD',
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 400,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
