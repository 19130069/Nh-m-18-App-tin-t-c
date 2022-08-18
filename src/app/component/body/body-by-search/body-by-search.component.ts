import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { BodyTrangChuComponent } from '../body-trang-chu/body-trang-chu.component';

@Component({
  selector: 'app-body-by-search',
  templateUrl: './body-by-search.component.html',
  styleUrls: ['./body-by-search.component.css']
})
export class BodyBySearchComponent implements OnInit {
  public keyword: string;
  data:any[];
  title:string='';
  dataSearch:any[]=[];
  dataItem:any[]=[];
  @Input() dataLinkCM:any[]=[
    {header:'Thời sự',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fthoi-su'},
    {header:'Giáo dục',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fgiao-duc'},
    {header:'Trồng người',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Ftrong-nguoi'},
   {header:'Bốn phương',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fbon-phuong'},
   {header:'Văn hóa',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fvan-hoa'},
    {header:'Tinh hoa',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Ftinh-hoa'},
    {header:'Giáo dục liêm chính',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fgiao-duc-liem-chinh'}
   
  ]
  constructor(private route: Router, private bodytrangchu: BodyTrangChuComponent,private appcomponet:AppComponent) {
    this.keyword = "";
    
    const navigation = this.route.getCurrentNavigation();
    this.data = navigation?.extras.state as any[];
    
    if (typeof this.data !== 'undefined') {
      this.keyword=this.data[0]
    }
   }
  
  ngOnInit(): void {
    this.search();
  }
  navigationExtras?: NavigationExtras;
  view2(title: string,content:string,day:string): void {
    this.route.navigate(['/search']).then(() => {
      const index: any[] = [title,content,day];
      this.navigationExtras = { state: index };
      this.route.navigateByUrl('/bodychitiet', this.navigationExtras);
    });
  }

  search(): void {
    this.dataItem=[];
    this.title = 'Kết quả tìm kiếm: ' + '"' + this.keyword + '" không tìm thấy kết quả nào?';
    for (let index = 0; index < this.dataLinkCM.length; index++) {
      
        this.appcomponet.getData(this.dataLinkCM[index]['data'])
          .subscribe((value: any) => {
            console.log(value);
            for (let item of value['items']) {
              this.dataSearch.push({ image: item['thumbnail'], title: item['title'],
                    time: this.bodytrangchu.getTime(item['pubDate']), link: item['link'],content:item['content'],day:item['pubDate'] });
              this.dataSearch.filter((res: any) => {
                if (res['title'].toLocaleLowerCase().match(this.keyword.toLocaleLowerCase()) != null) {
                  this.dataItem.push({ image: res.image, title: res.title, time: res.time, link: res.link,day:res.day,content:res.content });
                  this.title = 'Kết quả tìm kiếm: ' + '"' + this.keyword + '"';
                }
              });
              this.dataSearch = [];
            }
          });
      }
      console.log(this.dataItem);
    }
    
   
}
