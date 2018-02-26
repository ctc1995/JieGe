import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	//导航菜单
	public navbar:Array<any> = ['首页','企业活动直播',/*'市场活动','业务范围',*/'关于我们'];
	//底部字段
	public footerList:Array<any>=[
		{
			title:'联系人',
			value:'方觧',
			icon:'chuanzhen'
		},
		{
			title:'联系电话',
			value:'13826529652',
			icon:'phone1'
		},
		{
			title:'邮政编码',
			value:'518100',
			icon:'youbian'
		},
		{
			title:'公司邮箱',
			value:'331586401@qq.com',
			icon:'email1'
		},
		{
			title:'公司地址',
			value:'深圳市龙岗区龙岗街道龙园路279号4楼',
			icon:'location'
		}
	]
	//内容模块的图片展览
	imgRootPath:string="../../assets/image/";
	business:Array<object>=[
		{
			"str":"吃货Follow Me",
			"img":this.imgRootPath+"吃货.jpg",
			"video":"http://mudu.tv/show/videolink2/267503/origin"
		},
		{
			"str":"深圳市清远商会联合年会",
			"img":this.imgRootPath+"清远商会.jpg",
			"video":"http://mudu.tv/show/videolink2/315200/origin"
		},
		{
			"str":"卓依婷美廷家具见面会",
			"img":this.imgRootPath+"卓依廷见面会.JPG",
			"video":"http://mudu.tv/show/videolink2/255123/origin"
		},
		{
			"str":"美廷家具明星团购惠",
			"img":this.imgRootPath+"美廷明星团购会.JPG",
			"video":"http://mudu.tv/show/videolink2/303200/origin"
		}
	];
	land:Array<object>=[
		{
			"str":"西部雏鹰公益12周年",
			"img":this.imgRootPath+"西部雏鹰.JPG",
			"video":"http://mudu.tv/show/videolink2/307085/origin"
		},
		{
			"str":"“我是沙塘布人”系列活动表彰晚会",
			"img":this.imgRootPath+"沙塘布1.JPG",
			"video":"http://mudu.tv/show/videolink2/322190/origin"
		},
		{
			"str":"宝岭社区文明家庭表彰晚会",
			"img":this.imgRootPath+"宝岭晚会 .JPG",
			"video":"http://mudu.tv/show/videolink2/254782/origin"
		},
		{
			"str":"龙岗街道“扫黄打非”主题征文颁奖暨进校园宣传活动",
			"img":this.imgRootPath+"打黄扫非 .jpg",
			"video":"http://mudu.tv/show/videolink2/298591/origin"
		}
	];
	live:Array<object>=[
		{
			"str":"卓依婷美廷家具见面会",
			"img":this.imgRootPath+"卓依廷见面会.JPG",
			"video":"http://mudu.tv/show/videolink2/255123/origin"
		},
		{
			"str":"龙岗街道“扫黄打非”主题征文颁奖暨进校园宣传活动",
			"img":this.imgRootPath+"打黄扫非 .jpg",
			"video":"http://mudu.tv/show/videolink2/298591/origin"
		},
		{
			"str":"深圳市清远商会联合年会",
			"img":this.imgRootPath+"清远商会.jpg",
			"video":"http://mudu.tv/show/videolink2/315200/origin"
		},
		{
			"str":"吃货Follow Me",
			"img":this.imgRootPath+"吃货.jpg",
			"video":"http://mudu.tv/show/videolink2/267503/origin"
		},
	];
	public contentBox:Array<object>=[
		{
			title:"企业活动直播---才艺表演区",
			content:this.business
		},
		{
			title:"企业活动直播---教育宣传区",
			content:this.land
		},
		{
			title:"企业活动直播---公益活动区",
			content:this.live
		}
	];
	constructor() {
		
	}

}
