import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {ITitle} from "./contracts/iTitle.service";


@Injectable()
export class Title implements ITitle{

  public value = 'Angular 2';

  constructor(
    public http: Http
  ) {}

  public getData() {
    console.log('Title#getData(): Get Data');
    /**
     * return this.http.get('/assets/data.json')
     * .map(res => res.json());
     */
    return {
      value: 'AngularClass'
    };
  }

}
