import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RestApiService } from './rest-api.service';
import { StoreService } from 'src/data-store/store.service';
import { Subscription } from 'rxjs';
import { Person } from 'src/models/person';
import { MockStoreService } from 'test-mocks/store-service.mock';
import { pArrayMock } from 'test-mocks/mock-data';


describe('RestApiService', () => {
    let service: RestApiService;
    let httpMock: HttpTestingController;
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                {provide: StoreService, useClass: MockStoreService}
            ]
        });
        service = TestBed.get(RestApiService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should create an instance of RestApiService', () => {
        expect(service).toBeTruthy();
    });

    it(`should check if service is able to get the right base URL`, () => {
        expect(service.baseUrl).toEqual('http://localhost:8080');
    });

    // Defining a block to test getPeople method
    describe('Service call: getPeople()', () => {
        let sub: Subscription;
        let dataReturned: Person[];
        beforeEach(() => {
            sub = service.getPeople().subscribe(d => { dataReturned = d; });
        });
        afterEach(() => {
            sub.unsubscribe();
        });
        it(`should check if it is calling the right API Service endpoint`, () => {
            httpMock.expectOne(`http://localhost:8080/people.json`);
        });
        it(`should check if GET method is called for API Service`, () => {
            const req = httpMock.expectOne(`http://localhost:8080/people.json`);
            expect(req.request.method).toBe('GET');
        });
        it(`should check if the data returned is an array of Person`, () => {
            const req = httpMock.expectOne(`http://localhost:8080/people.json`);
            req.flush(pArrayMock);
            httpMock.verify();
            const pArray = pArrayMock.map(p => new Person(p));
            expect(dataReturned).toEqual(pArray);
            expect(dataReturned.length).toEqual(2);
            expect(dataReturned[0] instanceof Person).toBe(true);
        });
    });
});
