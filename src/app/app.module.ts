import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidAppComponent } from './pages/covid-app/covid-app.component';
import { DemoMaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovidTableComponent } from './cmps/covid-table/covid-table.component';
import { ChartComponent } from './cmps/covid-table/chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    CovidAppComponent,
    CovidTableComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
