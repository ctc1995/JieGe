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
	yixing:Array<object>=[
		{
			"str":"《兄弟！咱们下辈子再做义工》",
			"img":this.imgRootPath+"yigong.jpg",
			"video":"https://v.qq.com/x/page/t01512hdhd2.html"
		},
		{
			"str":"《义行》之千里还遗愿",
			"img":this.imgRootPath+"yiyuan.png",
			"video":"https://v.qq.com/x/page/g018951q4ao.html"
		},
		{
			"str":"《义行》之广东绿舟应急救援队",
			"img":this.imgRootPath+"lvzhou.png",
			"video":"https://v.qq.com/x/page/u0191q5fedg.html"
		},
		{
			"str":"《义行》之U爱助黔",
			"img":this.imgRootPath+"uai.png",
			"video":"https://v.qq.com/x/page/f0335kva945.html"
		}
	];
	pingshan:Array<object>=[
		{
			"str":"微电影《爱 在我们身边》",
			"img":this.imgRootPath+"aizaishenbian.jpg",
			"video":"https://v.qq.com/x/page/k01537k772b.html"
		},
		{
			"str":"《筑梦丰图 你我同行》",
			"img":this.imgRootPath+"zhumeng.jpg",
			"video":"https://v.qq.com/x/page/l0356ki5s1n.html"
		},
		{
			"str":"宣传片《纳世界之美•留乡愁之韵》",
			"img":this.imgRootPath+"longyuan.jpg",
			"video":"http://v.qq.com/x/page/f0329tmpu88.html"
		}
	];
	guangdian:Array<object>=[
		{
			"str":"微视频大赛宣传片《我拍最精彩》",
			"img":this.imgRootPath+"wopai.jpg",
			"video":"http://v.qq.com/x/page/z0162208csz.html"
		},
		{
			"str":"中国•深圳“萌娃小主播”大赛宣传片",
			"img":this.imgRootPath+"mengwa.jpg",
			"video":"https://v.qq.com/x/page/n0195ipczi4.html"
		},
		{
			"str":"吃货Follow Me邻里和谐百家宴栏目",
			"img":this.imgRootPath+"chihuo.jpg",
			"video":"https://v.qq.com/x/page/x03751pml5v.html"
		}
	];
	shijian:Array<object>=[
		{
			"str":"《市监局党建工作专题短片》",
			"img":this.imgRootPath+"shijianju.jpg",
			"video":"https://v.qq.com/x/page/j0331cs2ost.html"
		},
		{
			"str":"形象宣传片《紫薇社区党群服务中心》",
			"img":this.imgRootPath+"ziwei.jpg",
			"video":"https://v.qq.com/x/page/e0327qlbn44.html"
		},
		{
			"str":"宣传片《印象•龙城》",
			"img":this.imgRootPath+"yinxiang.jpg",
			"video":"https://v.qq.com/x/page/l0325cb6ij4.html"
		}
	];
	public contentBox:Array<object>=[
		{
			title:"《义行》系列纪录片",
			content:this.yixing
		},
		{
			title:"坪山社区基金会 And 朗泓地产",
			content:this.pingshan
		},
		{
			title:"深圳市监龙岗局 And 龙城街道各社区",
			content:this.shijian
		},
		{
			title:"市广电集团龙岗广电中心",
			content:this.guangdian
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