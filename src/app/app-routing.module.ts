import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { FooterComponent } from './footer/footer.component';
import { SaitPageComponent } from './sait-page/sait-page.component';
import { Page1Component } from './page1/page1.component';


const routes: Routes = [
  { path: 'main', component: Page1Component },
  { path: 'sait', component: SaitPageComponent },
  
  //otherwise redirects to home but need to implement it into PageNotFound
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
