import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    constructor() { }

    /* Getter for baseUrl - API endpoint from where data will be served. */
    getBaseUrl = (): string => {
        return environment.API_ROOT;
    }
}
