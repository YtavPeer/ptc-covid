import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  currentHistory: any;

  constructor(private http: HttpClient) { }

  getCovidSummery() {
    return this.http.get('https://api.covid19api.com/summary').toPromise()
  }

 async getByCountry(countries: any, from: any, to: any) {
    let historyData: any[] = [];

    for (let i = 0; i < countries.length; i++) {
      let country = countries[i].Country
      console.log(country)
      this.http.get(`https://api.covid19api.com/country/${country}/status/confirmed?from=${from}&to=${to}`).toPromise().then(res => {
        historyData.push(res)
        console.log(historyData)
      })
    }
    
    this.currentHistory =  historyData;
    return this.currentHistory;
  }

  getCurrentHistory() {
    return this.currentHistory;
  }


}
