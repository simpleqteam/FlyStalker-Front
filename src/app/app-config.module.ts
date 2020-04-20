import {NgModule, InjectionToken} from '@angular/core';

import {environment} from '../environments/environment';

export let APP_CONFIG_INJECTION_TOKEN = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  apiUrl: string;
}

const APP_CONFIG: AppConfig = {
  apiUrl: environment.apiUrl
};

@NgModule({
  providers: [{
    provide: APP_CONFIG_INJECTION_TOKEN,
    useValue: APP_CONFIG
  }]
})
export class AppConfigModule { }
