import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu.model';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  url = "./assets/data/menu.json";

  constructor(private http: HttpClient) { }

  getMenu():Observable<Menu[]>{
    return this.http.get<Menu[]>(this.url);
  }
}
