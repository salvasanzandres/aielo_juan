import {Observable} from "rxjs";
import {Weather} from "../../dto/model/weather";

export interface IWeather{
    getWeather(city: string):Observable<any>;
    getTest(): Observable<string>;
}