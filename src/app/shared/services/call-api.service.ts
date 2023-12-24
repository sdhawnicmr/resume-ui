import { Injectable } from '@angular/core';

import { Observable,of,throwError  } from 'rxjs';
import { retry,catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(private http:HttpClient) { }

  post(userData: any,postUrl: string){
     
    return this.http.post(postUrl,JSON.stringify(userData))
                    .pipe(
                      retry(1),
                      catchError(this.errorHandler)
                    );
  }

  excractData(res:Response){
    let body = res.json();
    return body || {};
  }

  errorHandler(error:Response){
    return throwError(error || 'Server Error');
  }

}
