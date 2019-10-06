import { Component, OnInit, Input } from '@angular/core';

import { RequestService } from '../_services/request.service';
import { ActivatedRoute } from '@angular/router';
import { PeoplesStatistics } from '../_models/people.model';
import { ApiService } from '../_services/api.service';

@Component({
    selector: 'app-people',
    templateUrl: 'people.component.html'
})

export class PeopleComponent implements OnInit {
    statistics: PeoplesStatistics;
    pageOfItems: Array<any>;
    pageSize = 20;
    totalResults: number;
    page = 1;
    uri: string = 'https://api.themoviedb.org/3/person/popular';

    constructor(private requestService: RequestService, private route: ActivatedRoute, private apiKeyService: ApiService) { }

    ngOnInit() {
        this.requestService
            .getData(this.uri + this.apiKeyService.getApiKey() + '&page=' + this.page)
            .subscribe(data => {
                this.statistics = data as PeoplesStatistics;
                this.totalResults = this.statistics.total_results;
            });
    }
    
    onPageChange(event) {
        this.requestService
            .getData(this.uri + this.apiKeyService.getApiKey() + '&page=' + this.page)
            .subscribe(data => {
                this.statistics = data as PeoplesStatistics;
            });
    }

}