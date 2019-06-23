import { Component, OnInit, Input } from '@angular/core';

import { Result } from '../_models/result.model';
import { ResultService } from '../_services/result.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'people.component.html'
})

export class PeopleComponent implements OnInit {
    results: Result[];
    pageOfItems: Array<any>;
    pageSize = 20;
    totalResults: number;
    page = 1;
    uri: string = '';

    constructor(private resultService: ResultService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.resultService
            .getResults(this.uri  + '&page=' + this.page)
            .subscribe(data => {
                this.results = data.results;
                this.totalResults = data.total_results;
            });
        
        this.route.params.subscribe(params => {
            const page = params['id'];
            this.resultService
            .getResults(this.uri + '&page=' + this.page)
            .subscribe(data => {
                this.results = data.results;
            })
        });
    }
    
    onPageChange(event) {
        this.resultService
            .getResults(this.uri  + '&page=' + this.page)
            .subscribe(data => {
                this.results = data.results;
            });
    }

}