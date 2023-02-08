import { environment } from 'environments/environment';

export class Endpoint {
    static uriBase(url: string): string {
        return `${environment.urlBase}/api/${url}`;
    }
}
