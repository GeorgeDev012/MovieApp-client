import { Component, OnInit, Input } from '@angular/core';

import { RequestService } from '../_services/request.service';
import { ActivatedRoute } from '@angular/router';
import { PeoplesStatistics } from '../_models/people.model';

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
    uri: string = '';

    constructor(private requestService: RequestService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.requestService
            .getData(this.uri  + '&page=' + this.page)
            .subscribe(data => {
                this.statistics = data as PeoplesStatistics;
                this.totalResults = this.statistics.total_results;
            });
        
        this.route.params.subscribe(params => {
            const page = params['id'];
            this.requestService
            .getData(this.uri + '&page=' + this.page)
            .subscribe(data => {
                this.statistics = data as PeoplesStatistics;
            })
        });
    }
    
    onPageChange(event) {
        this.requestService
            .getData(this.uri  + '&page=' + this.page)
            .subscribe(data => {
                this.statistics = data as PeoplesStatistics;
            });
    }

}