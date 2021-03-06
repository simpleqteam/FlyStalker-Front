import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { RequestInfoModel } from './models/request-info.model';
import { ListHelperService } from './list-helper.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {

  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5,10, 25, 100];
  requestList: RequestInfoModel[];
  constructor(private router: Router, private listHelperService: ListHelperService) {
    listHelperService.getCount().subscribe(n => {
      this.length = n;
      listHelperService.getData(0, this.pageSize).subscribe(
        l => {
        this.requestList = l;
        let i = 7;
        });
    })
  }

  ngOnInit(): void {
  }
  goToRequest() {
    this.router.navigate(['request']);
  }
  getHistoryRequest(event?: PageEvent) {
    this.listHelperService.getData(event.pageIndex, event.pageSize).subscribe(l => this.requestList = l);
  }
  goToInfo(id: string) {
    let elem = this.requestList.find(r => r.uuid === id);
    if(elem.IsFullInfo == undefined  || !elem.IsFullInfo) elem.IsFullInfo = true;
    else elem.IsFullInfo = false;
  }
}
