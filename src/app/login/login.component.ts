import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:string = "";
  psd:string = "";
  constructor(
    private titleService: Title,
    private router: Router
  ) { }

  ngOnInit() {

  }
  login(){
    console.log(this.user,this.psd)
    if(this.user=="admin"&&this.psd=="admin"){
      this.router.navigate(['/index'])
      this.titleService.setTitle("深圳觧歌文化传媒");
      alert("欢迎登录,觧歌传媒!")
      sessionStorage.setItem("logStat","login")
      sessionStorage.setItem("user","user")
      sessionStorage.setItem("psd","psd")
      location.reload()
    }
    else if(this.user==sessionStorage.getItem("user")&&this.psd==sessionStorage.getItem("psd")){
      this.router.navigate(['/index'])
      this.titleService.setTitle("深圳觧歌文化传媒");
      alert("欢迎登录,觧歌传媒!")
      sessionStorage.setItem("logStat","login")
      sessionStorage.setItem("user",this.user)
      sessionStorage.setItem("psd",this.user)
      location.reload()
    }else{
      alert("请输入正确账号密码或重新注册!")
    }
  }

}
