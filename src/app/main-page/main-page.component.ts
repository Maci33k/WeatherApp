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
  set_main_city : boolean = false;
  add_city : boolean = false;
  delete_city : boolean = false;
  search_city : boolean = false;
  static usersCity: string = 'Almeria';
  cityName : string = "";
  setMainCityAnnoucement : boolean = false;
  sideWeather1Options : boolean = false;
  sideWeather2Options : boolean = false;
  sideWeather3Options : boolean = false;
  isSideWeather1Set : boolean = false;
  isSideWeather2Set : boolean = false;
  isSideWeather3Set : boolean = false;
  isSideWeather1SetCommunicate : boolean = false;
  isSideWeather2SetCommunicate : boolean = false;
  isSideWeather3SetCommunicate : boolean = false;

  temperatureSideCity1 : any;
  SideCity1 : any;
  temperatureSideCity2 : any;
  SideCity2 : any;
  temperatureSideCity3 : any;
  SideCity3 : any;

  isItCloudy : any = false;
  isItClear : any = false;
  isItRaining : any = false;

  weather1IsItCloudy : any = false;
  weather1IsItClear : any = false;
  weather1IsItRaining : any = false;

   weather2IsItCloudy : any = false;
    weather2IsItClear : any = false;
    weather2IsItRaining : any = false;

     weather3IsItCloudy : any = false;
      weather3IsItClear : any = false;
      weather3IsItRaining : any = false;

  weatherVerify() {
    this.isItCloudy = this.weatherData?.weather[0]?.description.includes("cloud");
    this.isItClear = this.weatherData?.weather[0]?.description.includes("clear");
    this.isItRaining = this.weatherData?.weather[0]?.description.includes("rain");
    console.log("clouds: " + this.isItCloudy);
    console.log("cler: " + this.isItClear);
    console.log("rain: " + this.isItRaining);
  }

  sideWeather1Verify() {
    this.weather1IsItCloudy = this.weatherData?.weather[0]?.description.includes("cloud");
    this.weather1IsItClear = this.weatherData?.weather[0]?.description.includes("clear");
    this.weather1IsItRaining = this.weatherData?.weather[0]?.description.includes("rain");
  }

  sideWeather2Verify() {
    this.weather2IsItCloudy = this.weatherData?.weather[0]?.description.includes("cloud");
    this.weather2IsItClear = this.weatherData?.weather[0]?.description.includes("clear");
    this.weather2IsItRaining = this.weatherData?.weather[0]?.description.includes("rain");
  }

  sideWeather3Verify() {
    this.weather3IsItCloudy = this.weatherData?.weather[0]?.description.includes("cloud");
    this.weather3IsItClear = this.weatherData?.weather[0]?.description.includes("clear");
    this.weather3IsItRaining = this.weatherData?.weather[0]?.description.includes("rain");
  }



  testMethod() {
    this.isLoggedIn = this.sharingDataService.data;
    this.login = this.sharingDataService.nameData;
  }

  ngOnInit() {
    this.getWeatherData(MainPageComponent.usersCity);
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
      this.weatherVerify();
      console.log(this.max);
    }, 2000);
  }

  refresh() {
    this.getWeatherData(MainPageComponent.usersCity);
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
          this.weatherVerify();
          console.log(this.max);
        }, 2000);
  }

  displaySetMainCity() {
    this.set_main_city = true;
  }

  displayMainPage() {
    this.set_main_city = false;
    this.add_city = false;
    this.delete_city = false;
    this.search_city = false;
    this.setMainCityAnnoucement = false;
    this.sideWeather1Options = false;
    this.sideWeather2Options = false;
    this.sideWeather3Options = false;
  }

  setMainCitySubmit() {
    MainPageComponent.usersCity = this.cityName;
    this.refresh();
    this.setMainCityAnnoucement = true;
    setTimeout(() => {
      this.set_main_city = false;
    },3000);
  }

  setSideWeather1() {
    this.sideWeather1Options = true;
  }

  submitSideWeather1() {
    this.isSideWeather1SetCommunicate = true;
    this.isSideWeather1Set = true;
    MainPageComponent.usersCity = this.SideCity1;
    this.getWeatherData(MainPageComponent.usersCity);


    setTimeout(() => {
      this.temperatureSideCity1 = this.weatherData?.main?.temp;
      this.temperatureSideCity1 = (this.temperatureSideCity1 - 32)/1.8;
      this.temperatureSideCity1 = this.temperatureSideCity1.toFixed(0);
      this.SideCity1 = this.weatherData?.name;
      this.sideWeather1Options = false;
      this.isSideWeather1SetCommunicate = false;
      this.sideWeather1Verify();
    },3000);
  }

  setSideWeather2() {
      this.sideWeather2Options = true;
    }

  submitSideWeather2() {
      this.isSideWeather2SetCommunicate = true;
      this.isSideWeather2Set = true;
      MainPageComponent.usersCity = this.SideCity2;
      this.getWeatherData(MainPageComponent.usersCity);


      setTimeout(() => {
        this.temperatureSideCity2 = this.weatherData?.main?.temp;
        this.temperatureSideCity2 = (this.temperatureSideCity2 - 32)/1.8;
        this.temperatureSideCity2 = this.temperatureSideCity2.toFixed(0);
        this.SideCity2 = this.weatherData?.name;
        this.sideWeather2Options = false;
        this.isSideWeather2SetCommunicate = false;
        this.sideWeather2Verify();
      },3000);
    }

    setSideWeather3() {
          this.sideWeather3Options = true;
        }

    submitSideWeather3() {
          this.isSideWeather3SetCommunicate = true;
          this.isSideWeather3Set = true;
          MainPageComponent.usersCity = this.SideCity3;
          this.getWeatherData(MainPageComponent.usersCity);


          setTimeout(() => {
            this.temperatureSideCity3 = this.weatherData?.main?.temp;
            this.temperatureSideCity3 = (this.temperatureSideCity3 - 32)/1.8;
            this.temperatureSideCity3 = this.temperatureSideCity3.toFixed(0);
            this.SideCity3 = this.weatherData?.name;
            this.sideWeather3Options = false;
            this.isSideWeather3SetCommunicate = false;
            this.sideWeather3Verify();
          },3000);
        }






  private getWeatherData(cityName: string) {
     this.weatherService.getWeatherData(cityName).subscribe({
     next: (response) => { this.weatherData = response;
     console.log(response);
          } });



}
 }
