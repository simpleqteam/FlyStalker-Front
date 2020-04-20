import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestCardComponent } from './request-card/request-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RequestListComponent } from './request-list/request-list.component';
import { ResponseCardComponent } from './response-card/response-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from 'ngx-mat-datetime-picker';
import { NgxMatMomentModule } from 'ngx-mat-moment-adapter';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { AceEditorModule } from 'ng2-ace-editor';
import 'ace-builds/webpack-resolver';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { AppConfigModule } from './app-config.module';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml'),
    json: () => import('highlight.js/lib/languages/json'),
  };
}
@NgModule({
  declarations: [
    AppComponent,
    RequestCardComponent,
    PageNotFoundComponent,
    RequestListComponent,
    ResponseCardComponent,
  ],

  imports: [
    MatCheckboxModule,
    AppConfigModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    HighlightModule,
    AceEditorModule
  ],
  providers:[
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
