import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router'

import { DataService } from '../common/data-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selected: number = 0;
  navbar: Array<any> = [];
  //二级链接地址
  titleRoot: string ="_深圳觧歌文化传媒有限公司"
  navAddress: Array<object> = [
    {
      "name":"index",
      "title":"首页"+ this.titleRoot
    },
    {
      "name":"business",
      "title":"市场活动"+ this.titleRoot
    },
    {
      "name":"land",
      "title":"业务范围"+ this.titleRoot
    },
    {
      "name":"about",
      "title":"关于我们"+ this.titleRoot
    }
  ]
  //图片轮播速度
  myInterval : number = 1500;
	noWrapSlides : boolean = false;
  //初始值显示第一张
	activeSlideIndex : number=0;
  //轮播图片集合
  slides:Array<any> = ['../../assets/image/jwkl.jpg','../../assets/image/fengliang.jpg','../../assets/image/fszx.jpg'];
  constructor(
    private titleService: Title,
    private dataService: DataService,
    private router: Router
  ) {
    this.navbar = dataService.navbar;
  }
  //选中导航菜单
  checkStatus(index:number){
    this.selected = index;
    this.router.navigate(['/'+this.navAddress[index]['name']])
    this.titleService.setTitle(this.navAddress[index]['title']);
  }
  ngOnInit() {
  }

}
