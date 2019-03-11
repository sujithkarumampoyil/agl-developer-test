import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestApiService } from 'src/services/rest-api.service';
import { Subscription } from 'rxjs';
import { CatsList } from 'src/models/catlist';
import { Person } from 'src/models/person';

@Component({
    selector: 'show-list',
    templateUrl: './show-list.component.html',
    styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit, OnDestroy {

    constructor(
        private apiSvc: RestApiService
    ) { }

    obsSubs: Subscription[] = [];  // Store all component subscriptions
    catsList: CatsList[] = []; // catsList per gender for rendering the list in view

    ngOnInit() {
        this.obsSubs.push(this.apiSvc.getPeople()
        .subscribe((pArray: Person[]) => {
            this.catsList = this.getPetsPerGenderList(pArray, 'Cat');
        }));

    }

    ngOnDestroy() {
        // Unsubscribe from all component subscriptions
        this.obsSubs.forEach(sub => sub.unsubscribe());
    }

    // Getter to return cats that belong to a particular gender
    getPetsPerGenderList = (pArray: Person[], petType: string): any => {
        return pArray.reduce((petsPerGenderList, person) => {
            if (!petsPerGenderList[person.gender]) { petsPerGenderList[person.gender] = []; }
            const catsList = person.pets.filter((pet: any) => pet.type === petType)
                .map(fPet => fPet.name)
                .sort();
            petsPerGenderList[person.gender] = [...petsPerGenderList[person.gender], ...catsList];
            return petsPerGenderList;
        }, {});
    }

}
