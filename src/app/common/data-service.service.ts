import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	//热搜
	public resou:Array<any> = ['休闲娱乐','美食餐饮','便民服务'];
	//导航菜单
	public navbar:Array<any> = ['首页','市场活动','业务范围','关于我们'];
	//底部字段
	public footerList:Array<any>=[
		{
			title:'服务热线',
			value:'13713967665',
			icon:'phone1'
		},
		{
			title:'公司邮箱',
			value:'820352325@qq.com',
			icon:'email1'
		},
		{
			title:'公司传真',
			value:'0755-26662863',
			icon:'chuanzhen'
		},
		{
			title:'邮政编码',
			value:'518100',
			icon:'youbian'
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
