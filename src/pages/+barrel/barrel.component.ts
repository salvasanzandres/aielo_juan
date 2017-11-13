import {
  Component,
  OnInit,
} from '@angular/core';
import {WeatherService} from "../../domain/services/weather.service";



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

  constructor(private weatherService: WeatherService){}

  public ngOnInit() {
    console.log('hello `Barrel` component');


    this.weatherService.getTest().subscribe(
        response => {
          console.log('YES', response);
        }
    )
  }

}
