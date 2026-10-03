import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { FooterComponent } from './footer/footer.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { Page1Component } from './page1/page1.component';
import { DevPageComponent } from './dev-page/dev-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBodyComponent,
    FooterComponent,
    EducationPageComponent,
    Page1Component,
    DevPageComponent,
    PhotosPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
