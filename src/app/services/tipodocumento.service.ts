import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipodocumento } from '../models/tipodocumento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipodocumentoService {

  url_view = "http://201.217.12.78/observatoriomm/tipodocumento.json"

  constructor(private http: HttpClient) { }

  getTipoDocumento():Observable<Tipodocumento[]>{
    return this.http.get<Tipodocumento[]>(this.url_view);
  }

}
