import {Observable} from "rxjs";
import {Weather} from "../../models/weather";

export interface IWeather{
    getWeather(city: string):Observable<any>;
    getTest(): Observable<string>;
}