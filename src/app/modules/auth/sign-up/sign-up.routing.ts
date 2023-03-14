import { SignUpResolver } from './sign-up.resolver';
import { Route } from '@angular/router';
import { AuthSignUpComponent } from 'app/modules/auth/sign-up/sign-up.component';

export const authSignupRoutes: Route[] = [
    {
        path     : '',
        resolve  : {
            languages: SignUpResolver
        },
        component: AuthSignUpComponent
    }
];
