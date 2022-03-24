import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  url = 'https://optimizaprocess.net/test/';
  url_update = 'https://optimizaprocess.net/test/?o=update_visits';
  
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    public http:HttpClient
  ) { }
  
  getObtenerDatos() {
    return this.http.get(this.url).pipe(map((res:any) => {
      return res.data;
      }, error => {
      console.log(error);
      })
    )
  }
  
  postActualizarVisitas(id: any) {
    const formData: any = new FormData();
    formData.append('item_id', parseInt(id));
  
    return this.http
      .post(this.url_update, formData)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
}