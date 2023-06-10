import { Component, OnInit } from '@angular/core';
import { LoginPageComponent } from 'src/app/login-page/login-page.component';
import { SharingDataService } from 'src/app/sharing-data.service';
import { WeatherService } from 'src/app/weather.service';
import { WeatherData } from 'src/app/models/weather.model';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private sharingDataService : SharingDataService, private weatherService : WeatherService) {

  }
  isLoggedIn : any = this.sharingDataService.data;
  weatherData?: WeatherData;
  temperature : any;
  city : any;
  type : any;
  login : any = this.sharingDataService.nameData;
  pressure : any;
  humidity : any;
  wind : any;
  min : any;
  feels_like : any;
  max : any;

  testMethod() {
    this.isLoggedIn = this.sharingDataService.data;
    this.login = this.sharingDataService.nameData;
  }

  ngOnInit() {
    this.getWeatherData("Barcelona");
    setTimeout(() => {
      this.temperature = this.weatherData?.main?.temp;
      this.temperature = (this.temperature - 32)/1.8;
      this.temperature = this.temperature.toFixed(0);
      this.city = this.weatherData?.name;
      this.type = this.weatherData?.weather[0]?.description;
      this.pressure = this.weatherData?.main?.pressure;
      this.humidity = this.weatherData?.main?.humidity;
      this.wind = this.weatherData?.wind?.speed;
      this.min = this.weatherData?.main?.temp_min;
      this.min = (this.min - 32)/1.8;
      this.min = this.min.toFixed(0);
      this.feels_like = this.weatherData?.main?.feels_like;
      this.feels_like = (this.feels_like - 32)/1.8;
      this.feels_like = this.feels_like.toFixed(0);
      this.max = this.weatherData?.main?.temp_max;
      this.max = (this.max - 32)/1.8;
      this.max = this.max.toFixed(0);
    }, 1000);
  }

  private getWeatherData(cityName: string) {
     this.weatherService.getWeatherData(cityName).subscribe({
     next: (response) => { this.weatherData = response;
     console.log(response);
          } });



}
 }
