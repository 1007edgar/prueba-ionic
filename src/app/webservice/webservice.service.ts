import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  url = "https://optimizaprocess.net/test/";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    public http:HttpClient
  ) { }

  getObtenerDatos(){
    return this.http.get(this.url).pipe(map((res:any) =>{
        return res.data;
      },error=>{
        console.log(error);
      })
    )
  }

  actualizarVisitas(id, lists){//: Observable<any>{
    console.log("Visitas",lists);
    return new Promise(resolve =>{
      this.http.post(this.url, JSON.stringify(lists), this.httpOptions)
      .subscribe(data=> {
        resolve(data);
      },error=>{
        console.log(error);
        }
      );
      
      //.pipe(
        //tap(_ => console.log(`Data modificado: ${id}`))
        //catchError(this.handleError<lists[]>)
    });
  } 
}
