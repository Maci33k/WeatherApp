import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/app/models/weather.model';
import { HttpHeaders} from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component'


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {

  }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>('https://open-weather13.p.rapidapi.com/city/Barcelona',
    {headers: new HttpHeaders().set('X-RapidAPI-Host','open-weather13.p.rapidapi.com')
    .set('X-RapidAPI-Key', '035a92192cmsh72d151277be3ea7p1dc202jsn9dd9b60e76e8'),
    params: new HttpParams().set('city', cityName)})
  }






}
