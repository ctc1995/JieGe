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
  logStat = false;
  userName=""
  //二级链接地址
  titleRoot: string ="_深圳觧歌文化传媒有限公司"
  navAddress: Array<object> = [
    {
      "name":"index",
      "title":"首页"+ this.titleRoot
    },
    // {
    //   "name":"live",
    //   "title":"企业活动直播"+ this.titleRoot
    // },
    // {
    //   "name":"business",
    //   "title":"市场活动"+ this.titleRoot
    // },
    // {
    //   "name":"land",
    //   "title":"业务范围"+ this.titleRoot
    // },
    // {
    //   "name":"edu",
    //   "title":"教育活动区"+ this.titleRoot
    // },
    {
      "name":"activity",
      "title":"活动回顾"+ this.titleRoot
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
  isSpecial:boolean=false;

  constructor(
    private titleService: Title,
    private dataService: DataService,
    private router: Router
  ) {
    this.navbar = dataService.navbar;
    if(sessionStorage.getItem("logStat")=="login"){
      this.logStat = true;
      this.userName = sessionStorage.getItem("user")
    }else{
      this.logStat = false;
    }
  }
  //选中导航菜单
  checkStatus(index:number){
    this.selected = index;
    this.getUrl(index);
    console.log(index)
    // if(index==1){
    //   this.getItem(index)
    // }else{
    //   this.getUrl(index);
    //   this.isSpecial=false;
    // }
  }
  getItem(index:number=1){
    console.log(index);
    if(index!=1){
      this.getUrl(index);
    }
    else{
      this.isSpecial = !this.isSpecial;
    }
  }
  reload(){
    // if(location.hash!="#/live"){
    //   this.router.navigate(['/live'])
    // }else{
    //   location.reload();
    // }
  }
  getUrl(index:number){
    this.router.navigate(['/'+this.navAddress[index]['name']])
    this.titleService.setTitle(this.navAddress[index]['title']);
  }
  login(){
    this.router.navigate(['/login'])
    this.titleService.setTitle("登录---觧歌传媒");
    location.reload()
  }
  logup(){
    this.router.navigate(['/logup'])
    this.titleService.setTitle("注册---觧歌传媒");
    location.reload()
  }
  ngOnInit() {
  }

}
