import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseInfoModel } from './model/response-info.model';
import { ResponseService } from './response.service';

@Component({
  selector: 'app-response-card',
  templateUrl: './response-card.component.html',
  styleUrls: ['./response-card.component.scss']
})
export class ResponseCardComponent implements OnInit {
  responceInfo : ResponseInfoModel;
  constructor(private router:Router, private responseService: ResponseService) { 
    responseService.getInfo(router.parseUrl(router.url).queryParams['id']);
  }

  ngOnInit(): void {
  }
  goToList(){
    this.router.navigate(['list']);
  }
}
