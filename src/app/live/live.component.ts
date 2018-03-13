import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router'
import { DataService } from '../common/data-service.service'

@Component({
    templateUrl: './live.component.html',
    styleUrls:['./live.component.scss']
})

export class LiveComponent implements OnInit {
    contentBox:Array<object>
    constructor(
        private titleService: Title,
        private router: Router,
        private dataService: DataService
    ) {
        this.contentBox = this.dataService.contentBox
    }

    goRoom(imgPath, roomName){
        sessionStorage.setItem("txImg",imgPath)
        sessionStorage.setItem("roomName",roomName)
        this.router.navigate(['/room'])
        this.titleService.setTitle(roomName+"的直播间");
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    ngOnInit() { }
}
