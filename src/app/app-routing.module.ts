import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SaitPageComponent } from './sait-page/sait-page.component';
import { Page1Component } from './page1/page1.component';
import { DevPageComponent } from './dev-page/dev-page.component';
import { Workhub } from './workhub/workhub';


const routes: Routes = [
  { path: 'main', component: Page1Component },
  { path: 'sait', component: SaitPageComponent },
  { path: 'dev', component: DevPageComponent },
  { path: 'work', component: Workhub },
  
  //otherwise redirects to home but need to implement it into PageNotFound
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
