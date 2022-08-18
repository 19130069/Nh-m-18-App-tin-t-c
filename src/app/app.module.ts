import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { BodyTrangChuComponent } from './component/body/body-trang-chu/body-trang-chu.component';
import { BodyChiTietComponent } from './component/body/body-chi-tiet/body-chi-tiet.component';
import { BodyByMenuComponent } from './component/body/body-by-menu/body-by-menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HeaderComponent,
    BodyComponent,
    BodyTrangChuComponent,
    BodyChiTietComponent,
    BodyByMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
