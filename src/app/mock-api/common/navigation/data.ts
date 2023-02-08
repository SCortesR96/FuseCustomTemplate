/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
    {
        id: 'admin',
        title: 'Admin',
        type: 'group',
        icon: 'heroicons_outline:chart-pie',
        children: [
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'basic',
                icon: 'heroicons_outline:chart-square-bar',
                link: '/admin/dashboard',
            },
            {
                id: 'users',
                title: 'Users',
                type: 'basic',
                icon: 'heroicons_outline:users',
                link: '/admin/users',
            },
            {
                id: 'incomes',
                title: 'Incomes',
                type: 'collapsable',
                icon: 'heroicons_outline:chart-pie',
                children: [
                    {
                        id: 'users',
                        title: 'Users',
                        type: 'basic',
                        icon: 'heroicons_outline:chart-pie',
                        link: '/admin/users',
                    },
                ],
            },
        ],
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
