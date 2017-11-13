import {IWeather} from "./contracts/iWeather.service";
import {Observable} from "rxjs";
import {Weather} from "../models/weather";
import {Injectable} from "@angular/core";

@Injectable()
export class WeatherService implements  IWeather{

    public getWeather(city: string): Observable<Weather>{
        return new Observable(observer => {
            setTimeout(() => {
                observer.next(42);
            }, 1000);})
    }

    public getTest(): Observable<string>{
        return new Observable(observer => {
            setTimeout(() => {
                observer.next('PEPA IS HERE');
            }, 1000);})
    }

}