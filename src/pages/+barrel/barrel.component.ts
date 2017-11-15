import {
  Component,
  OnInit, Inject,
} from '@angular/core';
import {WeatherService} from "../../domain/services/weather.service";
import {IWeather} from "../../domain/services/contracts/iWeather.service";



@Component({
  selector: 'barrel',
  template: `
    <h1>Hello from Barrel</h1>
    <span>
      <a [routerLink]=" ['./child-barrel'] ">
        Child Barrel
      </a>
    </span>
    <router-outlet></router-outlet>
  `,
})
export class BarrelComponent implements OnInit {

  constructor( @Inject("WeatherService") public weatherService: IWeather){}

  public ngOnInit() {
    console.log('hello `Barrel` component');



    this.weatherService.getTest().subscribe(
        response => {
          console.log('YES', response);
        }
    )
    this.weatherService.getWeather('PARIS');
  }

}
