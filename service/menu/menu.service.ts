import { API } from '../API' ;
import { HTTP } from '../basic.request' ;

export class MenuService {
    static getMenu() : void {
        return HTTP.GET(API.url) ;
    }
}