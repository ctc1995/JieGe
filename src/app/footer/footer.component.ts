import { Component, OnInit } from '@angular/core';

import { DataService } from '../common/data-service.service'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerList: Array<any> = [];
  constructor(
    private dataService: DataService
  ) {
    this.footerList = dataService.footerList;
  }

  ngOnInit() {
  }

}
