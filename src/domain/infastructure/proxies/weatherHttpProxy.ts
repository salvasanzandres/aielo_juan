import {IWeatherRepository} from "../contracts/iWeatherRepository";
import {Observable} from "rxjs";
import {ApiWeatherResponse} from "../../domain/dto/response/apiWeather";
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class WeatherHttpProxy implements IWeatherRepository{

    public url: string = "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=";
    public apiKey: string = "74ab95303ad5da4e13764c74d31bb1a7";

    constructor(private http: Http){}

    getWeather(city: string): Observable<ApiWeatherResponse>{
        return this.http.get(this.url + this.apiKey).map(
            (response: Response)=>{
                if(response.status != 200)
                    return  Observable.of(null)
                else{
                    return <ApiWeatherResponse>response.json();
                }
            }
        )
    }
}