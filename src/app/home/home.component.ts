import { Component, OnInit } from '@angular/core';

import { DataService } from '../common/data-service.service'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    contentBox:Array<object>
    constructor(
        private dataService: DataService
    ) {
        this.contentBox = this.dataService.contentBox
    }


	ngOnInit() {
	}

}
