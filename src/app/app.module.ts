import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { BodyTrangChuComponent } from './component/body/body-trang-chu/body-trang-chu.component';
import { BodyChiTietComponent } from './component/body/body-chi-tiet/body-chi-tiet.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HeaderComponent,
    BodyComponent,
    BodyTrangChuComponent,
    BodyChiTietComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
