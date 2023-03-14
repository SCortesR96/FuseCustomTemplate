import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRoutesService } from 'app/core/config/app-routes.service';

@Injectable({
    providedIn: 'root',
})
export class SignUpService {
    constructor(
        private http: HttpClient,
        private _appRoutesService: AppRoutesService
    ) {}
}
