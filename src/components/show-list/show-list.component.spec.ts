import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShowListComponent } from './show-list.component';

describe('ShowListComponent', () => {
    let component: ShowListComponent;
    let fixture: ComponentFixture<ShowListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [ShowListComponent]
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
});
