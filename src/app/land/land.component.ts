import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.scss']
})
export class LandComponent implements OnInit {
  content: Array<object>=[
    {
      "img":"../../assets/image/xibu.JPG",
      "title":"庆典活动策划",
      "value":`深圳觧歌文化传媒有限公司曾策划承办商会年会、周年庆典等各种庆典活动，我们承办了“西部雏鹰公益12周年慈善颁奖大典”，“深圳市清远商会联合年会暨清远市招商推介会”，我们有规模优势、价格优势、经验优势及创新优势。`
    },
    {
      "img":"../../assets/image/bangyang2.jpg",
      "title":"演出活动主办",
      "value":`深圳觧歌文化传媒有限公司，公司以往在从事各类大型发布会、演出、会展以及各种文化艺术交流等方面积累了丰富的资源和经验。先后为美廷家具、龙岗街道、宝岭社区等企业事业单位做了整体活动策划和相关庆祝活动。`
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
