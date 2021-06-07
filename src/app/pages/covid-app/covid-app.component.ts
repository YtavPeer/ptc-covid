import { Component, OnInit } from '@angular/core';
import { CovidService } from '../../services/covid.service'

@Component({
  selector: 'covid-app',
  templateUrl: './covid-app.component.html',
  styleUrls: ['./covid-app.component.scss']
})
export class CovidAppComponent implements OnInit {

  covidData: any;
  covidCountry: any;
  covidHistory: any;

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.covidService.getCovidSummery().then(res => {
      this.covidData = res
      this.covidCountry = this.covidData.Countries
    })
  }

  covidHistoryChanged(historyData: any) {
    this.covidHistory = historyData;
  }

}
