import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data-service.service'

@Component({
    templateUrl: './live.component.html',
    styleUrls:['./live.component.scss']
})

export class LiveComponent implements OnInit {
    contentBox:Array<object>
    constructor(
        private dataService: DataService
    ) {
        this.contentBox = this.dataService.contentBox
    }

    ngOnInit() { }
}