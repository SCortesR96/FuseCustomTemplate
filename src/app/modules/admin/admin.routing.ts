import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const adminRoutes: Routes = [
    {
        path: '',
        children: [
            { path: 'dashboard', component: DashboardComponent },
            {
                path: 'users',
                loadChildren: () =>
                    import('./user/user.module').then((m) => m.UserModule),
            },
            { path: '**', redirectTo: '/admin/dashboard' },
        ],
    },
];
