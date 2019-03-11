import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';

describe('StoreService', () => {
    let service: StoreService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.get(StoreService);
    });

    it('should create an instance of DataStore service', () => {
        expect(service).toBeTruthy();
    });
    it('should check if getBaseUrl() method is returning expected value', () => {
        expect(service.getBaseUrl()).toEqual('http://agl-developer-test.azurewebsites.net');
    });
});
