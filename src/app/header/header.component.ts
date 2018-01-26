import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { DataService } from '../common/data-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selected: number = 0;
  navbar:Array<any> = [];
  //二级链接地址
  navAddress: Array<any> = ['index','business','land','about'];
  //图片轮播速度
  myInterval : number = 1500;
	noWrapSlides : boolean = false;
  //初始值显示第一张
	activeSlideIndex : number=0;
  //轮播图片集合
  slides:Array<any> = ['../../assets/image/jwkl.jpg','../../assets/image/fengliang.jpg','../../assets/image/fszx.jpg'];
  constructor(
    private dataService: DataService,
    private router: Router
  ) {
    this.navbar = dataService.navbar;
  }
  //选中导航菜单
  checkStatus(index:number){
    this.selected = index;
    this.router.navigate(['/'+this.navAddress[index]])
  }
  ngOnInit() {
  }

}
