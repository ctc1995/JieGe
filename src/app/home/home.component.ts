import { Component, OnInit } from '@angular/core';

import { DataService } from '../common/data-service.service'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	imgRootPath:string="../../assets/image/";
	business:Array<object>=[
		{
			"str":"吃货Follow Me",
			"img":this.imgRootPath+"chihuo1.jpg",
			"video":"http://mudu.tv/show/videolink2/267503/origin"
		},
		{
			"str":"深圳市清远商会联合年会",
			"img":this.imgRootPath+"qingyuan.jpg",
			"video":"http://mudu.tv/show/videolink2/315200/origin"
		},
		{
			"str":"卓依婷美廷家具见面会",
			"img":this.imgRootPath+"zhuo.JPG",
			"video":"http://mudu.tv/show/videolink2/255123/origin"
		},
		{
			"str":"美廷家具明星团购惠",
			"img":this.imgRootPath+"meiting.JPG",
			"video":"http://mudu.tv/show/videolink2/303200/origin"
		}
	];
	land:Array<object>=[
		{
			"str":"西部雏鹰公益12周年",
			"img":this.imgRootPath+"xibu.JPG",
			"video":"http://mudu.tv/show/videolink2/307085/origin"
		},
		{
			"str":"“我是沙塘布人”系列活动表彰晚会",
			"img":this.imgRootPath+"sha1.JPG",
			"video":"http://mudu.tv/show/videolink2/322190/origin"
		},
		{
			"str":"宝岭社区文明家庭表彰晚会",
			"img":this.imgRootPath+"baoling .JPG",
			"video":"http://mudu.tv/show/videolink2/254782/origin"
		},
		{
			"str":"龙岗街道“扫黄打非”主题征文颁奖暨进校园宣传活动",
			"img":this.imgRootPath+"saohuang.jpg",
			"video":"http://mudu.tv/show/videolink2/298591/origin"
		}
	];
	contentBox:Array<object>=[
		{
			title:"市场活动",
			content:this.business
		},
		{
			title:"公益活动",
			content:this.land
		}
	];
	constructor(){}

	ngOnInit() {
	}

}
