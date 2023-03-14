import { Injectable } from '@angular/core';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SignUpService } from './sign-up.service';

@Injectable({
    providedIn: 'root',
})
export class SignUpResolver implements Resolve<boolean> {
    constructor(private service: SignUpService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return of(true);
    }
}
