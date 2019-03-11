import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreService } from 'src/data-store/store.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from 'src/models/person';

@Injectable({
    providedIn: 'root'
})
export class RestApiService {

    constructor(
        private http: HttpClient,
        private store: StoreService
    ) { }

    get baseUrl(): string {
        return this.store.getBaseUrl();
    }

    /* Get list of all people from server */
    getPeople = (): Observable<Person[]> => {
        return this.http.get(`${this.baseUrl}/people.json`)
        .pipe(
            map((data: any) => data.map(d => new Person(d)))
        );
    }
}
