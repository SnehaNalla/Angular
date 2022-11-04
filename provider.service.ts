import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { catchError, elementAt } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  apiUrl: string = 'https://messagingservicedashboard.azurewebsites.net/api';
  headers = new Headers().set('Content-Type', 'application/json');
  
  

  constructor(private http: HttpClient) {}
 
  addProvider(data: any): Observable<any> { 
    let API_URL = `${this.apiUrl}/add/provider`; 
    return this.http.post(API_URL, data).pipe(catchError(this.error));
  }

  updateProvider(data: any): Observable<any> { 
    let API_URL = `${this.apiUrl}/update/provider`;
    return this.http.put(API_URL, data).pipe(catchError(this.error));
  }

  deleteProvider(data:any):Observable<any>{
    let API_URL = `${this.apiUrl}/delete/provider`+data.id;
    return this.http.delete(API_URL,data).pipe(catchError(this.error));
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }


}
