import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city: string;
  today: string;
  temp: number;
  humidity: number;
  wind_spd: number;
  direction: string;
  icon: string;
  conditions: any[];
  cityInput: string;

  constructor(private service: WeatherService) {}

  ngOnInit() {
    this.getData('tunis,tu');
  }

  private getData(cityName:string) {
    this.service.getWeatherCondition(cityName).subscribe(values => {
      this.city = values.city_name + ', ' + values.country_code;
      this.conditions = values.data;
      this.today = this.conditions[0].valid_date;
      this.temp = this.conditions[0].temp;
      this.humidity = this.conditions[0].rh;
      this.wind_spd = this.conditions[0].wind_spd * 3.6;
      this.direction = this.conditions[0].wind_cdir_full;
      this.icon = this.conditions[0].weather.icon;
      this.conditions = this.conditions.slice(1);  
    });
  }

  onSubmit() {
    this.getData(this.cityInput);
  }

}
