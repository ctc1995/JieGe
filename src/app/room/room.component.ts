import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  level=Math.floor(Math.random()*10)
  sum=Math.floor(Math.random()*10000)
  headerItems=["初级","中级","高级","豪华","特殊","趣味","套餐","VIP","恶搞","贵族"]
  daoju=[
    {
      "src":"../../assets/image/daoju/yangjiu.png",
      "text":"洋酒"
    },
    {
      "src":"../../assets/image/daoju/gaogenxie.png",
      "text":"高跟鞋"
    },
    {
      "src":"../../assets/image/daoju/jiayou.png",
      "text":"加油"
    },
    {
      "src":"../../assets/image/daoju/kafei.png",
      "text":"咖啡"
    },
    {
      "src":"../../assets/image/daoju/memeda.png",
      "text":"么么哒"
    },
    {
      "src":"../../assets/image/daoju/nuanbao.png",
      "text":"暖宝"
    },
    {
      "src":"../../assets/image/daoju/zhuantou.png",
      "text":"砖头"
    },
    {
      "src":"../../assets/image/daoju/pijiu.png",
      "text":"啤酒"
    },
    {
      "src":"../../assets/image/daoju/qiaokeli.png",
      "text":"巧克力"
    },
    {
      "src":"../../assets/image/daoju/wocuole.png",
      "text":"我错了"
    },
    {
      "src":"../../assets/image/daoju/xiangjiao.png",
      "text":"香蕉"
    },
    {
      "src":"../../assets/image/daoju/xiexie.png",
      "text":"谢谢"
    },
    {
      "src":"../../assets/image/daoju/yaowan.png",
      "text":"药丸"
    },
    {
      "src":"../../assets/image/daoju/yazi.png",
      "text":"鸭子"
    },
    {
      "src":"../../assets/image/daoju/zhangsheng.png",
      "text":"掌声"
    },
  ]
  txImg="../../assets/image/daoju/user.jpg"
  roomName="默认房间"
  constructor() {
    if(sessionStorage.getItem("txImg")){
      this.txImg = sessionStorage.getItem("txImg")
    }
    if(sessionStorage.getItem("roomName")){
      this.roomName = sessionStorage.getItem("roomName")
    }
    
  }

  ngOnInit() {
  }

}
