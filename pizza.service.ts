import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, elementAt } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  apiUrl: string = 'http://localhost:3000';
  headers = new Headers().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getPizzaOrders(): Observable<any> { 
    let API_URL = `${this.apiUrl}/pizzas`; 
    return this.http.get(API_URL).pipe(catchError(this.error));
  }

  createPizza(data: any): Observable<any> { 
    let API_URL = `${this.apiUrl}/pizzas`; 
    return this.http.post(API_URL, data).pipe(catchError(this.error));
  }

  updatePizza(data: any): Observable<any> { 
    let API_URL = `${this.apiUrl}/pizzas/`+data.id;
    return this.http.put(API_URL, data).pipe(catchError(this.error));
  }

  deletePizza(data:any):Observable<any>{
    let API_URL = `${this.apiUrl}/pizzas/`+data.id;
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
