import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import * as moment from 'moment';
import {RequestService} from './request.service';
import {ExchangeCreationModel, HttpMethod} from './models/exchangeCreationModel';
import {Router} from '@angular/router';

interface HttpMethodModel {
  value: HttpMethod;
  viewValue: string;
}

class Header {
  key: string;
  value: string;
  index: number;
}

const METHODS: HttpMethodModel[] = [
  {value: HttpMethod.GET, viewValue: 'GET'},
  {value: HttpMethod.POST, viewValue: 'POST'},
  {value: HttpMethod.PATCH, viewValue: 'PATCH'},
  {value: HttpMethod.PUT, viewValue: 'PUT'},
  {value: HttpMethod.DELETE, viewValue: 'DELETE'},
  {value: HttpMethod.OPTIONS, viewValue: 'OPTIONS'},
];

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss']
})
export class RequestCardComponent implements OnInit, AfterViewInit {
  methods = METHODS;

  requestMethodModel: HttpMethod = HttpMethod.GET;
  hostAndPathModel: string;
  headersModel: Header[] = [];

  code = `function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello there!";
    document.getElementById("demo2").innerHTML = "How are you?";
  }`;

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

  deleteHeader(index: number): void {
    this.headersModel.splice(index, 1);
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
          this.headersModelToMap(this.headersModel),
          this.dateControl.value,
          this.editor.value
        )
      ).subscribe();
  }

  private headersModelToMap(headersModel: Header[]): { [key: string]: string } {
    const headersMap: { [key: string]: string } = {};
    this.headersModel.forEach(it => headersMap[it.key] = it.value);
    return headersMap;
  }

  goToList(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  ngAfterViewInit() {

    this.editor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2
    });

    this.editor.mode = 'javascript';
    this.editor.value = `function testThis() {
  console.log("it's working!")
}`
//
//     this.editor.getEditor().commands.addCommand({
//       name: "showOtherCompletions",
//       bindKey: "Ctrl-.",
//       exec: function (editor) {
//
//       }
//     })
  }

}
