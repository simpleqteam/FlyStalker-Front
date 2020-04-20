import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ExchangeCreationModel} from './models/exchangeCreationModel';
import {APP_CONFIG_INJECTION_TOKEN, AppConfig} from '../app-config.module';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(
    @Inject(APP_CONFIG_INJECTION_TOKEN) private config: AppConfig,
    private httpClient: HttpClient
  ) {
  }

  sendRequest(exchangeCreationModel: ExchangeCreationModel): Observable<string> {
    return this.httpClient.post<string>(`${this.config.apiUrl}/exchanges`, exchangeCreationModel);
  }
}
