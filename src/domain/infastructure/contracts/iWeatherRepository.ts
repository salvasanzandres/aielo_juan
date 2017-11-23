import {Observable} from "rxjs";
import {ApiWeatherResponse} from "../../domain/dto/response/apiWeather";
import {Response} from "@angular/http";

export interface IWeatherRepository{
    getWeather(city: string): Observable<ApiWeatherResponse>
}