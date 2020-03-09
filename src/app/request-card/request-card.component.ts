import { Component, OnInit } from '@angular/core';


interface HttpMethod {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss']
})
export class RequestCardComponent implements OnInit {

  methods: HttpMethod[] = [
    {value: 'get', viewValue: 'GET'},
    {value: 'post', viewValue: 'POST'},
  ];
  selectedHttpMethod = 'get';
  url: String;
  constructor() { 
  }

  ngOnInit(): void {
    
  }

}
