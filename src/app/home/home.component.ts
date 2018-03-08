import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router'

import { DataService } from '../common/data-service.service'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    contentBox:Array<object>
    constructor(
        private titleService: Title,
        private dataService: DataService,
        private router: Router
    ) {
        this.contentBox = this.dataService.contentBox
    }
    goRoom(imgPath, roomName){
        sessionStorage.setItem("txImg",imgPath)
        sessionStorage.setItem("roomName",roomName)
        this.router.navigate(['/room'])
        this.titleService.setTitle(roomName+"的直播间");
    }

	ngOnInit() {
	}

}
