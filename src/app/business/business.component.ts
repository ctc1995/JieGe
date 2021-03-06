import { Component } from '@angular/core'

@Component({
    selector : "app-business",
    templateUrl : './business.component.html',
    styleUrls : ['./business.component.scss']
})

export class BusinessComponent{
    imgRootPath: string="../../assets/image/";
    content: Array<object>=[
        {
            "title":"吃货 FLLOW ME 邻里和谐百家宴",
            "img":this.imgRootPath+"chihuo.png",
            "video":"http://mudu.tv/show/videolink2/299264/origin"
        },
        {
            "title":"“我是沙塘布人”系列活动表彰晚会",
            "img":this.imgRootPath+"sha2.JPG",
            "video":"http://mudu.tv/show/videolink2/322190/origin"
        },
        {
            "title":"深圳市清远商会联合年会暨清远市招商推介会",
            "img":this.imgRootPath+"qingyuan.jpg",
            "video":"http://mudu.tv/show/videolink2/315200/origin"
        },
        {
            "title":"宝岭社区文明家庭表彰晚会",
            "img":this.imgRootPath+"baoling .JPG",
            "video":"http://mudu.tv/show/videolink2/254778/origin"
        }
    ]
}