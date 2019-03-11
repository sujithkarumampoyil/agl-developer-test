import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { ShowListComponent } from './show-list.component';
import { RestApiService } from 'src/services/rest-api.service';
import { MockRestApiService } from 'test-mocks/rest-api-service.mock';
import { pArrayMock } from 'test-mocks/mock-data';
import { Person } from 'src/models/person';
import { throwError } from 'rxjs';

describe('ShowListComponent', () => {
    let component: ShowListComponent;
    let fixture: ComponentFixture<ShowListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [ShowListComponent],
            providers: [
                {provide: RestApiService, useClass: MockRestApiService}
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShowListComponent);
        component = fixture.componentInstance;
    });

    it(`should create an instance of 'show-list' component`, () => {
        expect(component).toBeTruthy();
    });
    // Block for ngOnInit() method
    describe(`Component Initializaition checks`, () => {
        it(`should check if required service methods are getting called`, () => {
            const apiSvc = TestBed.get(RestApiService);
            spyOn(apiSvc, 'getPeople').and.callThrough();
            expect(component.obsSubs.length).toEqual(0);
            fixture.detectChanges();
            expect(component.obsSubs.length).toEqual(1);
            expect(apiSvc.getPeople).toHaveBeenCalled();
            expect(apiSvc.getPeople).toHaveBeenCalledTimes(1);
        });
        it(`should verify that 'getPetsPerGenderList' method is called`, () => {
            const pArray = pArrayMock.map(p => new Person(p));
            spyOn(component, 'getPetsPerGenderList');
            fixture.detectChanges();
            expect(component.getPetsPerGenderList).toHaveBeenCalled();
            expect(component.getPetsPerGenderList).toHaveBeenCalledTimes(1);
            expect(component.getPetsPerGenderList).toHaveBeenCalledWith(pArray, 'Cat');
        });
        it(`should check if 'catsList' variable is initialised`, () => {
            expect(component.catsList).toBeUndefined();
            fixture.detectChanges();
            expect(component.catsList).toBeDefined();
            expect(component.catsList.Male.length).toEqual(1);
            expect(component.catsList.Female.length).toEqual(1);
        });
        it(`should check the elements in the view for successful API response`, () => {
            expect(fixture.debugElement.queryAll(By.css('.list-section')).length).toEqual(0);
            expect(fixture.debugElement.query(By.css('.error-section'))).toBeNull();
            fixture.detectChanges();
            expect(fixture.debugElement.queryAll(By.css('.list-section')).length).toEqual(2);
            expect(fixture.debugElement.query(By.css('.error-section'))).toBeNull();
        });
        it(`should check the view in case there is an error returned by API Service`, () => {
            const apiService = TestBed.get(RestApiService);
            spyOn(apiService, 'getPeople').and.returnValue(throwError(''));

            expect(component.error).toBeUndefined();
            expect(fixture.debugElement.query(By.css('.error-section'))).toBeNull();
            fixture.detectChanges();
            expect(component.error).toBeDefined();
            expect(fixture.debugElement.query(By.css('.error-section'))).toBeDefined();
        });
    });

    // Block for ngOnDestroy() method
    describe(`Component Destruction checks`, () => {
        it(`should check all observable subscriptions are cleared`, () => {
            fixture.detectChanges();
            component.obsSubs.forEach(o => { spyOn(o, 'unsubscribe'); });
            component.ngOnDestroy();
            component.obsSubs.forEach(o => {
                expect(o.unsubscribe).toHaveBeenCalled();
                expect(o.unsubscribe).toHaveBeenCalledTimes(1);
            });
        });
    });

    // Block for getPetsPerGenderList() method
    describe(`'getPetsPerGenderList()' method checks`, () => {
        let pArray: Person[] = [];
        beforeEach(() => {
            pArray = pArrayMock.map(p => new Person(p));
        });
        it(`should check if method is returning value as expected when 'Cat' is passed as a type`, () => {
            const petsReturned = component.getPetsPerGenderList(pArray, 'Cat');
            expect(petsReturned.Male).toBeDefined();
            expect(petsReturned.Female).toBeDefined();
            expect(petsReturned.Male.length).toEqual(1);
            expect(petsReturned.Female.length).toEqual(1);
            expect(petsReturned.Male[0]).toEqual('Pet 3');
            expect(petsReturned.Female[0]).toEqual('Pet 1');
        });
        it(`should check if method is returning value as expected when 'Fish' is passed as a type`, () => {
            const petsReturned = component.getPetsPerGenderList(pArray, 'Fish');
            expect(petsReturned.Male).toBeDefined();
            expect(petsReturned.Female).toBeDefined();
            expect(petsReturned.Male.length).toEqual(1);
            expect(petsReturned.Female.length).toEqual(1);
            expect(petsReturned.Male[0]).toEqual('Pet 4');
            expect(petsReturned.Female[0]).toEqual('Pet 2');
        });
        it(`should check if method is returning value as expected when 'Dog' is passed as a type`, () => {
            const petsReturned = component.getPetsPerGenderList(pArray, 'Dog');
            expect(petsReturned.Male).toBeDefined();
            expect(petsReturned.Female).toEqual([]);
            expect(petsReturned.Male.length).toEqual(1);
            expect(petsReturned.Male[0]).toEqual('Pet 5');
        });
    });
});
