import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BodyTrangChuComponent } from '../body-trang-chu/body-trang-chu.component';

@Component({
  selector: 'app-body-by-search',
  templateUrl: './body-by-search.component.html',
  styleUrls: ['./body-by-search.component.css']
})
export class BodyBySearchComponent implements OnInit {
  public keyword: string;

  @Input() dataLinkCM:any[]=[
    {header:'Trang chủ',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Ftrang-chu'},
    {header:'Thời sự',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fthoi-su'},
    {header:'Giáo dục',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fgiao-duc'},
    {header:'Trồng người',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Ftrong-nguoi'},
   {header:'Bốn phương',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fbon-phuong'},
   {header:'Văn hóa',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fvan-hoa'},
    {header:'Tinh hoa',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Ftinh-hoa'},
    {header:'Giáo dục liêm chính',data:'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fgiao-duc-liem-chinh'}
   
  ]
  constructor(private route: Router, private bodytrangchu: BodyTrangChuComponent) {
    this.keyword = "";

   }
  
  ngOnInit(): void {
  }
  // searchByIndex(keyw: string): void{
  //   var i = 0;
  //   var j = 0;
      
  //           if (keyw.trim().toLocaleLowerCase().match(key.trim().toLocaleLowerCase()) != null){
  //               var urlItem = this.dataLinkCM[i]['data'][j];
  //               this.bodytrangchu.getDatas(urlItem, this.dataItem);
  //               this.title = 'Kết quả tìm kiếm: ' + '"' + keyw + '"';
  //               break;
            
  //           if (keyw.trim().toLocaleLowerCase().match(item['header'].trim().toLocaleLowerCase()) != null){
  //             var urlItem = this.dataLinkCM[i]['header'];
  //             this.bodyCenter.getDatas(urlItem, this.dataItem);
  //            for(let k = 0; k < item.data.length; k++){
  //             var urlItem = this.dataLinkCM[i]['data'][k];
  //             this.bodyCenter.getDatas(urlItem, this.dataItem);
  //            }
  //            this.title = 'Kết quả tìm kiếm: ' + '"' + keyw + '"';
  //             break;
          
  //           j++
  //           }
  //       j = 0;
  //       i++;
  //     }

  // }
  // search(keyw: string): void {
  //   this.title = 'Kết quả tìm kiếm: ' + '"' + keyw + '" không tìm thấy kết quả nào?';
  //   for (let index = 0; index < this.dataLinkCM.length; index++) {
  //     for (let j = 0; j < this.dataLinkCM[index]['data'].length; j++) {
  //       this.com.getData(this.dataLinkCM[index]['data'][j])
  //         .subscribe((value: any) => {
  //           for (let item of value['items']) {
  //             this.dataLinkSearch.push({ image: item['thumbnail'], title: item['title'],
  //                   time: this.bodyCenter.getTime(item['pubDate']), link: item['link'] });
  //             this.dataLinkSearch.filter((res: any) => {
  //               if (res['title'].toLocaleLowerCase().match(keyw.toLocaleLowerCase()) != null) {
  //                 this.dataItem.push({ image: res.image, title: res.title, time: res.time, link: res.link });
  //                 this.title = 'Kết quả tìm kiếm: ' + '"' + keyw + '"';
  //               }
  //             });
  //             this.dataLinkSearch = [];
  //           }
  //         });
  //     }
  //   }
  // }
}
