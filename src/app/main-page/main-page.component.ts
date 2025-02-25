import { Component, OnInit } from '@angular/core';
import { LoginPageComponent } from 'src/app/login-page/login-page.component';
import { SharingDataService } from 'src/app/sharing-data.service';
import { WeatherService } from 'src/app/weather.service';
import { WeatherData } from 'src/app/models/weather.model';
import { DataService } from 'src/app/data-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private sharingDataService : SharingDataService, private weatherService : WeatherService
  , private dataService: DataService, private http: HttpClient) {

  }
  numer : any = 0;
  UserData : any;
  jakiesdanedotestow : any;
  allDataFromDB : any;
  mainCityFromDB : string = "";
  sideCity1FromDB : string = "";
  sideCity2FromDB : string = "";
  sideCity3FromDB : string = "";
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


   search_city_temperature : any;
   search_city_description : any;
   search_city_wind : any;
   search_city_max : any;
   search_city_min : any;
   search_city_humidity : any;
   searched_city : any;
   isSearchedCitySubmitted : boolean = false;

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

  setSearchedWeatherData() {
    MainPageComponent.usersCity = this.searched_city;
    this.getWeatherData(MainPageComponent.usersCity);
    setTimeout(() => {
          this.search_city_temperature = this.weatherData?.main?.temp;
          this.search_city_temperature = (this.search_city_temperature - 32)/1.8;
          this.search_city_temperature = this.search_city_temperature.toFixed(0);
          this.searched_city = this.weatherData?.name;
          this.search_city_description = this.weatherData?.weather[0]?.description;
          this.search_city_humidity = this.weatherData?.main?.humidity;
          this.search_city_wind = this.weatherData?.wind?.speed;
          this.search_city_min = this.weatherData?.main?.temp_min;
          this.search_city_min = (this.search_city_min - 32)/1.8;
          this.search_city_min = this.search_city_min.toFixed(0);
          this.search_city_max = this.weatherData?.main?.temp_max;
          this.search_city_max = (this.search_city_max - 32)/1.8;
          this.search_city_max = this.search_city_max.toFixed(0);
        }, 2000);
  }

  ngOnInit() {
   this.dataService.getAllData().subscribe((res)=>{
    this.allDataFromDB = JSON.stringify(res);
    this.UserData = res.data[0];
    for(let i = 0; i < this.allDataFromDB.length; i++) {
      if(this.allDataFromDB[i] == '"')
        this.numer++;
      if(this.numer == 17 && this.allDataFromDB[i] != '"')
        this.mainCityFromDB = this.mainCityFromDB.concat(this.allDataFromDB[i]);
      if(this.numer == 21 && this.allDataFromDB[i] != '"')
        this.sideCity1FromDB = this.sideCity1FromDB.concat(this.allDataFromDB[i]);
      if(this.numer == 25 && this.allDataFromDB[i] != '"')
              this.sideCity2FromDB = this.sideCity2FromDB.concat(this.allDataFromDB[i]);
      if(this.numer == 29 && this.allDataFromDB[i] != '"')
                    this.sideCity3FromDB = this.sideCity3FromDB.concat(this.allDataFromDB[i]);

    }
      MainPageComponent.usersCity = this.mainCityFromDB;
      console.log("MainCity "+MainPageComponent.usersCity);
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
            MainPageComponent.usersCity = this.sideCity1FromDB;
            this.getWeatherData(MainPageComponent.usersCity);
          }, 1000);

    setTimeout(() => {
           this.temperatureSideCity1 = this.weatherData?.main?.temp;
           this.temperatureSideCity1 = (this.temperatureSideCity1 - 32)/1.8;
           this.temperatureSideCity1 = this.temperatureSideCity1.toFixed(0);
           this.SideCity1 = this.weatherData?.name;
           this.sideWeather1Options = false;
           this.isSideWeather1SetCommunicate = false;
           this.sideWeather1Verify();
           this.isSideWeather1Set = true;
           MainPageComponent.usersCity = this.sideCity2FromDB;
           this.getWeatherData(MainPageComponent.usersCity);
    }, 2000);

    setTimeout(() => {
               this.temperatureSideCity2 = this.weatherData?.main?.temp;
               this.temperatureSideCity2 = (this.temperatureSideCity2 - 32)/1.8;
               this.temperatureSideCity2 = this.temperatureSideCity2.toFixed(0);
               this.SideCity2 = this.weatherData?.name;
               this.sideWeather2Options = false;
               this.isSideWeather2SetCommunicate = false;
               this.sideWeather2Verify();
               this.isSideWeather2Set = true;
               MainPageComponent.usersCity = this.sideCity3FromDB;
               this.getWeatherData(MainPageComponent.usersCity);
        }, 3000);

        setTimeout(() => {
                       this.temperatureSideCity3 = this.weatherData?.main?.temp;
                       this.temperatureSideCity3 = (this.temperatureSideCity3 - 32)/1.8;
                       this.temperatureSideCity3 = this.temperatureSideCity3.toFixed(0);
                       this.SideCity3 = this.weatherData?.name;
                       this.sideWeather3Options = false;
                       this.isSideWeather3SetCommunicate = false;
                       this.sideWeather3Verify();
                       this.isSideWeather3Set = true;
                }, 4000);



   })


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
      this.setMainCityAnnoucement = false;
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

  DisplaySearchCity() {
    this.search_city = true;
  }

  searchCitySubmit() {
    MainPageComponent.usersCity = this.searched_city;
    this.setSearchedWeatherData();
     setTimeout(() => {
        this.isSearchedCitySubmitted = true;
     },2000);
  }

deleteCity1() {
  this.temperatureSideCity1 = null;
  this.SideCity1 = null;
  this.isSideWeather1SetCommunicate = false;
  this.isSideWeather1Set = false;
}

deleteCity2() {
  this.temperatureSideCity2 = null;
  this.SideCity2 = null;
  this.isSideWeather2SetCommunicate = false;
  this.isSideWeather2Set = false;
}

deleteCity3() {
  this.temperatureSideCity3 = null;
  this.SideCity3 = null;
  this.isSideWeather3SetCommunicate = false;
  this.isSideWeather3Set = false;
}





  private getWeatherData(cityName: string) {
     this.weatherService.getWeatherData(cityName).subscribe({
     next: (response) => { this.weatherData = response;
     console.log(response);
          } });



}
 }
