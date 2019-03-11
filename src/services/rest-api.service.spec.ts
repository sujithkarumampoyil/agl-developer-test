import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RestApiService } from './rest-api.service';

describe('RestApiService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
    });

    it('should create an instance of RestApiService', () => {
        const service: RestApiService = TestBed.get(RestApiService);
        expect(service).toBeTruthy();
    });
});
