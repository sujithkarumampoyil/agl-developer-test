import { Observable, of } from 'rxjs';
import { Person } from 'src/models/person';
import { pArrayMock } from './mock-data';

// Defining a mock service class for RestApiService
// This prevents calling actual service endpoints when running tests.
export class MockRestApiService {
    getPeople = (): Observable<Person[]> => {
        const pArray = pArrayMock.map(p => new Person(p));
        return of(pArray);
    }
}
