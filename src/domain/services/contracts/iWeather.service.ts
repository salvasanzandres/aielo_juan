import {Observable} from "rxjs";
import {Weather} from "../../models/weather";

export interface IWeather{
    getWeather(city: string):Observable<Weather>;
    getTest(): Observable<string>;
}