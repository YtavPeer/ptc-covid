import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { CovidService } from 'src/app/services/covid.service';




@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges, OnInit {

  historyData: any;

  @Input() dataByCountry: any;
  currentDate: any;
  currentSeries: any;

  chartOption: any;
  //  = {
  //   xAxis: {
  //     type: 'category',
  //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  //   },
  //   yAxis: {
  //     type: 'value',
  //   },
  //   series: [
  //     {
  //       data: [820, 932, 901, 934, 1290, 1330, 1320],
  //       type: 'line',
  //     },
  //     {
  //       data: [820, 932, 350, 960, 1350, 68, 150],
  //       type: 'line',
  //     },
  //   ],
  // };


  constructor(private covidService: CovidService) {
    this.historyData = this.covidService.currentHistory;
    console.log('history data', this.historyData)
  }

  ngOnChanges(changes: any) {

    console.log('on change', this.dataByCountry)

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
        console.log('current dates is:', this.currentDate)

        //setting the series
        let series = []
        console.log('the serieal is', this.dataByCountry)


        for (let j = 0; j < this.dataByCountry.length; j++) {
          //need to make inner loop to fill the data of current cases
          let currentCases = [];

          for (let k = 0; k < this.dataByCountry[j].length; k++) {
            let currCase = this.dataByCountry[j][k].Cases;
            currentCases.push(currCase)
          }

          //make the new object of ech country and push to series arr
          let objCounty = {
            data: currentCases,
            type: 'line',
          };
          //push to series
          series.push(objCounty);
        }

        console.log('the full series is', series)


        //make the new data 
        let newChartData = {
          xAxis: {
            type: 'category',
            data: dates,
          },
          yAxis: {
            type: 'value',
          },
          series: series
        }

        //switch to chart
        // this.chartOption = newChartData
        this.chartOption=newChartData

      }, 1000);
    }
  }

  ngOnInit() {
    console.log('Init', this.dataByCountry);
  }

}


