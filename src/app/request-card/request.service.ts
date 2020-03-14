import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  {RequestModel} from './models/request.model'
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }
  sendRequest(requestData:RequestModel):Observable<string>{
    return this.httpClient.post<string>('url',requestData);
  }
}
