// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


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
import { BodyBySearchComponent } from './component/body/body-by-search/body-by-search.component';
import { FormsModule } from '@angular/forms';
const route: Routes = [
 
  { path: '', component: BodyTrangChuComponent},
  { path: 'bodybymenu/:title', component: BodyByMenuComponent},//tile la ten cua menu

  { path: 'bodychitiet', component: BodyChiTietComponent},
  { path: 'search', component: BodyBySearchComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HeaderComponent,
    BodyComponent,
    BodyTrangChuComponent,
    BodyChiTietComponent,
    BodyByMenuComponent,
    FooterComponent,
    BodyBySearchComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    RouterModule.forRoot(route),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent],
  exports: [HttpClientModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
