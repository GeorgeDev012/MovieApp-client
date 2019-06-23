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
    items = [];
    pageOfItems: Array<any>;
    @Input() pageSize = 20;
    uri: string = '';

    constructor(private resultService: ResultService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.resultService
            .getResults(this.uri)
            .subscribe(data => {
                this.results = data.results;
            });
        
        this.route.params.subscribe(params => {
            const page = params['id'];
            this.resultService
            .getResults(this.uri + page)
            .subscribe(data => {
                this.results = data.results;
                this.items = data.results;
                for(let i = 0; i < 20; i++) {
                    //this.items.push(data.results[i]);
                }
                //this.items = Array(data.total_results).fill(0).map(x => ({ name: data.results.name}));
            });
        });
    }

    onChangePage(pageOfItems: Array<any>) {
        this.pageOfItems = pageOfItems;
    }
}