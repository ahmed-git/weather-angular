export interface WeatherData {
    city_name: string;
    country_code: string;
    data: DayWeatherData[];
}

export interface DayWeatherData {

    rh: number;
    wind_spd: number;
    wind_cdir_full: string;
    valid_date: string;
    weather: [{
        icon: string
    }],
    max_temp: number;
    temp: number;
    min_temp: number;

}
