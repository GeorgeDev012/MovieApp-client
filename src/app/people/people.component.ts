import { Component, OnInit, Input } from '@angular/core';

import { Result } from '../_models/result.model';
import { RequestService } from '../_services/request.service';
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

    constructor(private requestService: RequestService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.requestService
            .getData(this.uri  + '&page=' + this.page)
            .subscribe(data => {
                this.results = data.results;
                this.totalResults = data.total_results;
            });
        
        this.route.params.subscribe(params => {
            const page = params['id'];
            this.requestService
            .getData(this.uri + '&page=' + this.page)
            .subscribe(data => {
                this.results = data.results;
            })
        });
    }
    
    onPageChange(event) {
        this.requestService
            .getData(this.uri  + '&page=' + this.page)
            .subscribe(data => {
                this.results = data.results;
            });
    }

}