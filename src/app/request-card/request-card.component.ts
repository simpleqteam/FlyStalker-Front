import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { RequestService } from './request.service';
import { RequestModel } from './models/request.model';
import { Router } from '@angular/router';
interface HttpMethod {
  value: string;
  viewValue: string;
}
class Header {
  key: String;
  value: String;
  index: number;
}

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss']
})
export class RequestCardComponent implements OnInit {
  source: string = '';
  methods: HttpMethod[] = [
    { value: 'get', viewValue: 'GET' },
    { value: 'post', viewValue: 'POST' },
  ];
  headers: Header[] = [];
  selectedHttpMethod = 'get';
  url: String;
  constructor(private requestService: RequestService, public router:Router) {
  }
  public disabled = false;
  public showSpinners = true;
  public disableSecond = true;
  public dateControl = new FormControl(moment());

  @ViewChild('picker') picker: any;

  addHeader(): void {
    let h = new Header();
    h.index = this.headers.length;
    this.headers.push(h);
  }
  deleteHeader(index: number): void {
    this.headers.splice(index, 1);
  }

  ngOnInit() {

  }

  closePicker() {
    this.picker.cancel();
  }
  send(){
    let data = new RequestModel();
    data.headers = this.headers;
    data.httpMethod = this.selectedHttpMethod;
    data.date = this.dateControl.value;
    data.content = this.source;
    this.requestService.sendRequest(data).subscribe();
  }
  goToList(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
