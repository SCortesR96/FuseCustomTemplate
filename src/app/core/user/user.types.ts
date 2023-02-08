export interface User {
    id: number;
    uuid: string;
    name: string;
    lastname: string;
    phone: string;
    language: string;
    email: string;
    blocked: boolean;
    enabled: boolean;
    avatar?: string;
    status?: string;
}
