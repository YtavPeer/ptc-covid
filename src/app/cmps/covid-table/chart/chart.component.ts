import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges, OnInit {

  @Input() dataByCountry: any;
  historyData: any;
  currentDate: any;
  currentSeries: any;
  chartOption: any;

  constructor(private covidService: CovidService) {
    this.historyData = this.covidService.currentHistory;
  }

  ngOnChanges(changes: any) {
    if (this.dataByCountry) {
      setTimeout(() => {
        //setting the dates
        let dates = [];
        let length = this.dataByCountry[0].length;
        for (let i = 0; i < length; i++) {
          let element = this.dataByCountry[0][i].Date;
          dates.push(element)
        }
        this.currentDate = dates;
        //setting the series
        let series = []
        for (let j = 0; j < this.dataByCountry.length; j++) {
          //need to make inner loop to fill the data of current cases
          let currentCases = [];
          for (let k = 0; k < this.dataByCountry[j].length; k++) {
            let currCase = this.dataByCountry[j][k].Cases;
            currentCases.push(currCase)
          }
          //make the new object of ech country and push to series arr
          let objCounty = {
            name: this.dataByCountry[j][0].Country,
            data: currentCases,
            type: 'line',
          };
          //push to series
          series.push(objCounty);
        }
        //make the new data 
        let newChartData = {
          title: {
            text: 'Covid cases Diagram',
            subtext: 'showing countris by dates',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} (Cases)'
          },
          xAxis: {
            type: 'category',
            data: dates,
          },
          yAxis: {
            type: 'value',
          },
          series: series
        }
        //switch to covid chart
        this.chartOption = newChartData

      }, 2000);
    }
  }

  ngOnInit() {
    console.log('Init');
  }

}


