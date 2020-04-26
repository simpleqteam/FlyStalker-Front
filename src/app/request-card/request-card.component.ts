import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { RequestService } from './request.service';
import { ExchangeCreationModel, HttpMethod } from './models/exchangeCreationModel';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface HttpMethodModel {
  value: HttpMethod;
  viewValue: string;
}
interface ModeType {
  name: string;
  value: string;
}
class Header {
  name: string;
  value: string;
  index: number;
}
class Param {
  name: string;
  value: string;
  index: number;
}
const METHODS: HttpMethodModel[] = [
  { value: HttpMethod.GET, viewValue: 'GET' },
  { value: HttpMethod.POST, viewValue: 'POST' },
  { value: HttpMethod.PATCH, viewValue: 'PATCH' },
  { value: HttpMethod.PUT, viewValue: 'PUT' },
  { value: HttpMethod.DELETE, viewValue: 'DELETE' },
  { value: HttpMethod.OPTIONS, viewValue: 'OPTIONS' },
];

const HIGHLIGHTS: ModeType[] = [
  { name: 'XML', value: 'xml' },
  { name: 'JSON', value: 'json' },
  { name: 'TEXT', value: 'text' },
  { name: 'JS', value: 'javascript' },
  { name: 'HTML', value: 'html' },
]

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss']
})
export class RequestCardComponent implements OnInit, AfterViewInit {
  methods = METHODS;
  hightlights = HIGHLIGHTS;
  text: string;
  showLineNumbers: true;

  requestMethodModel: HttpMethod = HttpMethod.GET;
  hostAndPathModel: string;
  headersModel: Header[] = [];
  paramsModel: Param[] = [];
  selectedHighLight = 'xml';
  isSendNow: boolean;


  constructor(private requestService: RequestService, public router: Router, private snackBar: MatSnackBar) {
  }

  get hostAndPath() {
    if (this.paramsModel.length > 0) {
      let hp = this.hostAndPathModel + '?';
      return this.paramsModel.reduce((a, c) => c.name && c.value ? `${a}${c.name}=${c.value}&` : a, hp).slice(0, -1);
    }
    return this.hostAndPathModel;
  }

  set hostAndPath(value: string) {
    let url = new URL(value);
    if (value && value.includes('?')) {
      this.paramsModel = [];
      url.searchParams.forEach((v, k) => {
        let param = new Param();
        param.index = this.paramsModel.length;
        param.value = v;
        param.name = k;
        this.paramsModel.push(param);
      })

    }
    else {
      this.paramsModel = [];
    }
    this.hostAndPathModel = url.origin + url.pathname;


  }

  public disabled = false;
  public showSpinners = true;
  public disableSecond = true;
  public dateControl = new FormControl(moment());


  addHeader(): void {
    let h = new Header();
    h.index = this.headersModel.length;
    this.headersModel.push(h);
  }
  addParam(): void {
    let p = new Param();
    p.index = this.paramsModel.length;
    this.paramsModel.push(p);
  }
  deleteHeader(index: number): void {
    this.headersModel.splice(index, 1);
  }
  deleteParam(index: number): void {
    let pos = this.paramsModel.findIndex(p => p.index == index)
    this.paramsModel.splice(pos, 1);
  }
  ngOnInit() {

  }




  send() {
    this.requestService
      .sendRequest(
        new ExchangeCreationModel(
          this.requestMethodModel,
          this.hostAndPathModel,
          this.headersModel,
          this.dateControl.value,
          this.requestMethodModel == HttpMethod.GET ? null : this.text,
          this.paramsModel
        )
      ).subscribe(
        success => {
          this.snackBar.open("Success", 'To History', { duration: 2000 }).onAction().subscribe(() => {
            this.goToList('list')
          })
        },
        err => {
          this.snackBar.open("Something was wrong", '', { duration: 2000 });
          console.log(err);
        }
      );
  }


  goToList(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  ngAfterViewInit() {

  }

}

