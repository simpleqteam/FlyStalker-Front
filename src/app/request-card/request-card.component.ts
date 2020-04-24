import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { RequestService } from './request.service';
import { ExchangeCreationModel, HttpMethod } from './models/exchangeCreationModel';
import { Router } from '@angular/router';

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
  requestMethodModel: HttpMethod = HttpMethod.GET;
  hostAndPathModel: string;
  headersModel: Header[] = [];
  paramsModel: Param[] = [];
  selectedHighLight = 'xml';
  isSendNow: boolean;

  constructor(private requestService: RequestService, public router: Router) {
  }

  public disabled = false;
  public showSpinners = true;
  public disableSecond = true;
  public dateControl = new FormControl(moment());

  @ViewChild('picker') picker: any;
  @ViewChild('editor') editor;

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
    this.paramsModel.splice(index, 1);
  }
  ngOnInit() {

  }

  closePicker() {
    this.picker.cancel();
  }


  send() {
    this.requestService
      .sendRequest(
        new ExchangeCreationModel(
          this.requestMethodModel,
          this.hostAndPathModel,
          this.headersModel,
          this.dateControl.value,
          this.editor.value,
          this.paramsModel
        )
      ).subscribe();
  }


  goToList(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  ngAfterViewInit() {

    this.editor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2
    });

  }

}

