import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
    }));

    it('should create an instance of app component', () => {
        expect(component).toBeTruthy();
    });

    it(`should check if 'show-list' element is present in the view`, () => {
        expect(fixture.debugElement.query(By.css('show-list'))).not.toBeNull();
    });
    it(`should verify that there is only one 'show-list' element present in the view`, () => {
        expect(fixture.debugElement.queryAll(By.css('show-list')).length).toEqual(1);
    });
});
