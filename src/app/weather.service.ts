import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from './weather-data';

const apiKey = "08395cda90b14fc7ba471ce0020c4707";
const apiUrl = "https://api.weatherbit.io/v2.0/forecast/daily";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiLink: string;
  
  constructor(private http: HttpClient) {}

  getWeatherCondition(city: string): Observable<WeatherData> {
    this.apiLink = apiUrl + "?&city=" + city + "&days=7&key=" + apiKey;
    return this.http.get<WeatherData>(this.apiLink);
  }
}
