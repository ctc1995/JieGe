import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  first: string = `深圳觧歌文化传媒有限公司成立于2016年11月，其前身是深圳飞天昱翔文化传播有限公司，是一家以活动策划、演出制作、广告设计、网络直播、影视节目、电影电视剧制作经营的综合性文化传媒公司。业务范围涵盖政府企事业单位，不仅拥有专业、高素质、高水准的导演、编导、摄影、摄像、后期剪辑、动画包装团队，全部毕业于传媒大学以及其他专业艺术院校的高素质员工，同时还具有由省新闻出版广电局颁发的广播电视节目制作许可证和全套最新摄制设备和专业演播厅。通过开放性的创作实体为国内的上百家公司和政府单位提供服务，不断拓展制作领域，创作出了许多高端、获奖作品。`
  constructor() { }

  ngOnInit() {
  }

}
