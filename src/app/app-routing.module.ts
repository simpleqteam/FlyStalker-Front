import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestCardComponent } from './request-card/request-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'request', component: RequestCardComponent
  },
  {
    path: '', redirectTo: 'request', pathMatch:'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
