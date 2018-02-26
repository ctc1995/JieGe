import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data-service.service'

@Component({
    templateUrl: './edu.component.html',
    styleUrls:['./edu.component.scss']
})

export class EduComponent implements OnInit {
    
	imgRootPath:string="../../assets/image/edu/";
	voice:Array<object>=[
		{
			"str":"单口相声",
			"img":this.imgRootPath+"1.webp.jpg",
			"video":"#/edu"
		},
		{
			"str":"胡建普通发故事会",
			"img":this.imgRootPath+"2.webp.jpg",
			"video":"#/edu"
		},
		{
			"str":"猎奇世界",
			"img":this.imgRootPath+"3.webp.jpg",
			"video":"#/edu"
		},
		{
			"str":"今夜故事堂",
			"img":this.imgRootPath+"4.webp.jpg",
			"video":"#/edu"
		}
	];
	duanzi:Array<object>=[
		{
			"str":"来自动物城的声优",
			"img":this.imgRootPath+"5.webp.jpg",
			"video":"#/edu"
		},
		{
			"str":"各种动画配音",
			"img":this.imgRootPath+"6.webp.jpg",
			"video":"#/edu"
		},
		{
			"str":"动漫电影混编",
			"img":this.imgRootPath+"7.webp.jpg",
			"video":"#/edu"
		},
		{
			"str":"幻神配音秀",
			"img":this.imgRootPath+"8.webp.jpg",
			"video":"#/edu"
		}
	];
	dance:Array<object>=[
		{
			"str":"音乐讲堂",
			"img":this.imgRootPath+"9.webp.jpg",
			"video":"#/edu"
		},
		{
			"str":"茶艺者",
			"img":this.imgRootPath+"10.webp.jpg",
			"video":"#/edu"
		},
		{
			"str":"户外教学",
			"img":this.imgRootPath+"11.webp.jpg",
			"video":"#/edu"
		},
		{
			"str":"女声独唱",
			"img":this.imgRootPath+"12.webp.jpg",
			"video":"#/edu"
		}
	];
	public contentBox:Array<object>=[
		{
			title:"公司活动直播---故事会",
			content:this.voice
		},
		{
			title:"公司活动直播---配音秀",
			content:this.duanzi
		},
		{
			title:"公司活动直播---混合直播",
			content:this.dance
		}
	];
    constructor(
    ) {
    }

    ngOnInit() { }
}