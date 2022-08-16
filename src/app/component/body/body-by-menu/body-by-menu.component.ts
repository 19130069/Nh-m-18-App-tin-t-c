import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BodyTrangChuComponent } from '../body-trang-chu/body-trang-chu.component';

@Component({
  selector: 'app-body-by-menu',
  templateUrl: './body-by-menu.component.html',
  styleUrls: ['./body-by-menu.component.css']
})



export class BodyByMenuComponent implements OnInit,OnDestroy {
  @Input() dataLink:any[]=[
    {header:'Trang chủ',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Ftrang-chu'},
    {header:'Thời sự',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fthoi-su'},
    {header:'Giáo dục',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fgiao-duc'},
    {header:'Trồng người',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Ftrong-nguoi'},
   {header:'Bốn phương',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fbon-phuong'},
   {header:'Văn hóa',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fvan-hoa'},
    {header:'Tinh hoa',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Ftinh-hoa'},
    {header:'Giáo dục liêm chính',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fgiao-duc-liem-chinh'}
   
  ]
  @Input() dataThoiSu: any[];
  title:string="";
  subGetParam: Subscription = new Subscription();
  constructor(private router:Router,private activatedRoute: ActivatedRoute,private bodytrangchu:BodyTrangChuComponent) {
    this.dataThoiSu=[];


   }
   ngOnDestroy(): void {
    this.subGetParam.unsubscribe();
    
  }
  navigationExtras?: NavigationExtras;
  //De chuyen noi dung tu trang bai sang trang chi tiet
   view2(title: string,content:string,day:string): void {
    this.router.navigate(['/']).then(() => {
      const index: any[] = [title,content,day];
      this.navigationExtras = { state: index };
      this.router.navigateByUrl('/bodychitiet', this.navigationExtras);
    });
  }

  //Lay du lieu theo menu
  getData(){
    this.subGetParam = this.activatedRoute.params.subscribe((param) => {
      let name = '-1';
      if (param['title'] != undefined) {//title la trung voi be appModule.ts
        name = param['title'];
      }
    let url="";
    this.dataThoiSu=[];

    for(let item of this.dataLink){
      if(name==item['header'])
      url=item['data']
  
    }
    this.bodytrangchu.getDatas(url,this.dataThoiSu)
    console.log(this.dataThoiSu);
    });
 
  }
  //set active menu
setActive(title:string){
  this.router.navigate(['/bodybymenu/' + title])
 
}
  ngOnInit(): void {
    this.getData();
  }



}
