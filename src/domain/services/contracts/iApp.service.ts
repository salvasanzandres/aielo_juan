import {InternalStateType} from "../app.service";

export interface IAppState{

    _state: InternalStateType;

    get(prop?: any):void;

    set(prop: string, value: any):void;

}