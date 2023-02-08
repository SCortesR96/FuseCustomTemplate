import { Endpoint } from './end-points';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AppRoutesService {
    public auth = {
        login: Endpoint.uriBase('auth/login'),
        register: Endpoint.uriBase('auth/register'),
        changePassword: Endpoint.uriBase('auth/change-password'),
        forgotPassword: Endpoint.uriBase('auth/forgot-password'),
        resetPassword: Endpoint.uriBase('auth/reset-password'),
        validateToken: Endpoint.uriBase('auth/validate-token'),
        refreshToken: Endpoint.uriBase('auth/refresh-token'),
    };
}
