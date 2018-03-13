import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router'

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.scss']
})
export class LogupComponent implements OnInit {
  user:string = "";
  psd:string = "";
  btnDis = false;
  constructor(
    private titleService: Title,
    private router: Router
  ) { }

  ngOnInit() {
  }
  get_code(){
    alert('由于伺服维护,请稍后再次发送请求!')
    this.btnDis=true;
  }
  logup(){
    sessionStorage.setItem("user",this.user)
    sessionStorage.setItem("psd",this.psd)
    this.router.navigate(['/login'])
    this.titleService.setTitle("登录---觧歌传媒");
    alert("注册成功,账号:"+this.user+"  密码:"+this.psd)
    location.reload()
  }
}
