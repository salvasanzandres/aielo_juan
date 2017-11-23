import {IWeather} from "./contracts/iWeather.service";
import {Observable} from "rxjs";
import {Weather} from "../dto/model/weather";
import {Injectable} from "@angular/core";
import {IWeatherRepository} from "../infastructure/contracts/iWeatherRepository";

@Injectable()
export class WeatherService implements  IWeather{

    constructor(public repository: IWeatherRepository){}

    public getWeather(city: string): any{
        return this.repository.getWeather("aielo").subscribe(
            response=> {
                console.log(response)
            }
        )
    }

    public getTest(): Observable<string>{
        return new Observable(observer => {
            setTimeout(() => {
                observer.next('PEPA IS HERE');
            }, 1000);})
    }

}