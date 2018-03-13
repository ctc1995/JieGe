import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router'
import { DataService } from '../common/data-service.service'

@Component({
    templateUrl: './caiyi.component.html',
    styleUrls:['./caiyi.component.scss']
})

export class CaiyiComponent implements OnInit {
    
	imgRootPath:string="../../assets/image/caiyi/";
	voice:Array<object>=[
		{
			"str":"呆柒柒正在尬歌",
			"img":this.imgRootPath+"1.jpg",
			"video":"#/caiyi"
		},
		{
			"str":"温柔留给意中人",
			"img":this.imgRootPath+"2.jpg",
			"video":"#/caiyi"
		},
		{
			"str":"天籁剧场",
			"img":this.imgRootPath+"3.jpg",
			"video":"#/caiyi"
		},
		{
			"str":"深圳好声音",
			"img":this.imgRootPath+"4.jpg",
			"video":"#/caiyi"
		}
	];
	duanzi:Array<object>=[
		{
			"str":"美女段子手",
			"img":this.imgRootPath+"5.jpg",
			"video":"#/caiyi"
		},
		{
			"str":"乡村二人转",
			"img":this.imgRootPath+"6.jpg",
			"video":"#/caiyi"
		},
		{
			"str":"段王-乔菲菲",
			"img":this.imgRootPath+"7.jpg",
			"video":"#/caiyi"
		},
		{
			"str":"一个很哇塞的段子手",
			"img":this.imgRootPath+"8.jpg",
			"video":"#/caiyi"
		}
	];
	dance:Array<object>=[
		{
			"str":"奇幻舞者",
			"img":this.imgRootPath+"9.jpg",
			"video":"#/caiyi"
		},
		{
			"str":"一个被唠嗑耽误的舞者",
			"img":this.imgRootPath+"10.jpg",
			"video":"#/caiyi"
		},
		{
			"str":"海边神舞者",
			"img":this.imgRootPath+"11.jpg",
			"video":"#/caiyi"
		},
		{
			"str":"舞王",
			"img":this.imgRootPath+"12.jpg",
			"video":"#/caiyi"
		}
	];
	public contentBox:Array<object>=[
		{
			title:"好声音",
			content:this.voice
		},
		{
			title:"段子手",
			content:this.duanzi
		},
		{
			title:"舞蹈",
			content:this.dance
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
    ngOnInit() { }
}