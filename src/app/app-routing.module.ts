import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EducationPageComponent } from './education-page/education-page.component';
import { Page1Component } from './page1/page1.component';
import { DevPageComponent } from './dev-page/dev-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: Page1Component },
  { path: 'education', component: EducationPageComponent },
  { path: 'sait', redirectTo: 'education', pathMatch: 'full' },
  { path: 'dev', component: DevPageComponent },
  { path: 'work', redirectTo: 'dev', pathMatch: 'full' },
  { path: 'photos', component: PhotosPageComponent },
  
  //otherwise redirects to home but need to implement it into PageNotFound
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
