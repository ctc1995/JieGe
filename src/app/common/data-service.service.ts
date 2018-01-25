import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	//导航菜单
	public navbar:Array<any> = ['首页','市场活动','业务范围','关于我们'];
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
	constructor() {
		
	}

}
