import {Observable} from "rxjs";
import {ApiWeatherResponse} from "../../domain/models/responses/apiWeather";
import {Response} from "@angular/http";

export interface IWeatherRepository{
    getWeather(city: string): Observable<ApiWeatherResponse>
}