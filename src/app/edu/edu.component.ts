import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router'
import { DataService } from '../common/data-service.service'

@Component({
    templateUrl: './edu.component.html',
    styleUrls:['./edu.component.scss']
})

export class EduComponent implements OnInit {
    fenlei:Array<string>=[
		"IT/互联网教学","营销课程","乐器教学","语言培训"
	]
	paixu:Array<string>=["免费","资料","练习"]
	imgRootPath:string="../../assets/image/edu/";
	gushi:Array<object>=[
		{
			"flag":"Python3",
			"str":"全网最热Python3入门+进阶 更快上手实际开发",
			"img":this.imgRootPath+"python.jpg",
			"num":"36",
			"price":"166.00",
			"video":"#/edu"
		},
		{
			"flag":"Javascript",
			"str":"揭秘一线互联网企业 前端JavaScript高级面试",
			"img":this.imgRootPath+"js.jpg",
			"num":"28",
			"price":"289.00",
			"video":"#/edu"
		},
		{
			"flag":"尤克里里",
			"str":"零基础尤克里里轻松学——基础入门教学",
			"img":this.imgRootPath+"jita.jpg",
			"num":"11",
			"price":"99.00",
			"video":"#/edu"
		},
		{
			"flag":"韩语",
			"str":"韩语入门至TOPIK初级",
			"img":this.imgRootPath+"hanyu.png",
			"num":"24",
			"price":"168.00",
			"video":"#/edu"
		}
	]
	public contentBox:Array<object>=[
		{
			title:"实战推荐",
			content:this.gushi
		}
	];
    constructor(
        private titleService: Title,
        private router: Router,
    ) {

    }

    goRoom(imgPath, roomName){
        sessionStorage.setItem("txImg",imgPath)
        sessionStorage.setItem("roomName",roomName)
        this.router.navigate(['/room'])
        this.titleService.setTitle(roomName+"的直播间");
        document.body.scrollTop = document.documentElement.scrollTop = 0;
	}
	alert(){
		alert('功能开发中!')
	}
	baoming(){
		let user = sessionStorage.getItem("user");
		if(user){
			alert("当前功能处于内部开放阶段,暂不对外公测!")
		}else{
			let bool = confirm("请登录!")
			if (bool) {
				this.router.navigate(['/login'])
				this.titleService.setTitle("登录---觧歌传媒");
			}
		}
	}
    ngOnInit() { }
}