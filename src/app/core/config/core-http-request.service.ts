import { HttpHeaders, HttpClient, HttpEvent } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CoreHttpRequestService {
    constructor(private http: HttpClient) {}

    get(uri: string, isSentHeader: boolean = true) {
        const URL = environment.urlBase + uri;
        const headers = !isSentHeader
            ? null
            : new HttpHeaders({
                  Authentication: '',
                  'Content-Type': 'application/json; charset=utf-8',
              });
        this.http.get(URL, { headers }).pipe(catchError(this.handleError));
    }

    show() {}

    store() {}

    update() {}

    destroy() {}

    handleError = (err: any): Observable<HttpEvent<any>> => {
        let errorMessage = 'There was an error, please, try it later.';

        return throwError(errorMessage);
    };
}
