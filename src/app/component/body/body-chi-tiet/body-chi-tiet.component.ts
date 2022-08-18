import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { BodyTrangChuComponent } from '../body-trang-chu/body-trang-chu.component';

@Component({
  selector: 'app-body-chi-tiet',
  templateUrl: './body-chi-tiet.component.html',
  styleUrls: ['./body-chi-tiet.component.css']
})
export class BodyChiTietComponent implements OnInit {
  private urlsGiaoDuc ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fgiao-duc';
 
  private urlsBonPhuong ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fbon-phuong';
  
  private urlsTinhHoa ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Ftinh-hoa';
  @Input() dataGiaoDuc: any[];
  
  @Input() dataBonPhuong: any[];
  
  @Input() dataTinhHoa: any[];
  
  today = new Date();
  jstoday = formatDate(this.today, 'yyyy-MM-dd hh:mm:ss aa', 'en-US', '+0700');
  stringJson: any;
  htmlStr: string;
  data:any[];
  title:string='';
  day:string='';
  author:string='';
  constructor(private bodytrangchu:BodyTrangChuComponent,private route:Router,private news:AppComponent) { 
    this.htmlStr='';
    const navigation = this.route.getCurrentNavigation();
    this.data = navigation?.extras.state as any[];
    
    this.dataGiaoDuc=[];
    
    this.dataBonPhuong=[];
    
    this.dataTinhHoa=[];
   
    this.getDatas(this.urlsGiaoDuc,this.dataGiaoDuc);
    
    this.getDatas(this.urlsBonPhuong,this.dataBonPhuong);
    
    this.getDatas(this.urlsTinhHoa,this.dataTinhHoa);
   

    if (typeof this.data !== 'undefined') {
        this.htmlStr =this.data[1];
        this.title =this.data[0];
        this.day =this.data[2];
        this.author=this.data[3];
    }
  }

  ngOnInit(): void {

  }
  getTime(date: string) {
    //thời gian hiện tại
    const days = Number(this.jstoday.substr(8, 2));
    const hours = Number(this.jstoday.substr(11, 2));
    const minutes = Number(this.jstoday.substr(14, 2));
    const months = Number(this.jstoday.substr(5, 2));
    //tgian của link bài viết
    const day = days - Number(date.substr(8, 2));
    const minute = minutes - Number(date.substr(14, 2));
    const hour = hours - Number(date.substr(11, 2));
    const month = months - Number(date.substr(5, 2));

    if (month > 0) {
      return (month + ' tháng trước');
    } else
      if (day > 0) {
        return (day + ' ngày trước');
      } else {
        if (hour > 0) {
          return (hour + ' giờ trước');
        } else {
          if (minute > 0) { return (minute + ' phút trước') }
          else { return (hour + 5 + ' giờ trước'); }
        }
      }
    }
  getDatas(urls: string, datas: any[]) {
    this.news.getData(urls)
      .subscribe((value: any) => {
        for (let item of value['items']) {
            datas.push({ image: item['thumbnail'], title: item['title'],
                  time: this.getTime(item['pubDate']), link: item['link'],description:item['description'],
                content:item['content'],day:item['pubDate'],author:item['author'] });
             }
      });
  }
  navigationExtras?: NavigationExtras;
  //De chuyen noi dung tu trang bai sang trang chi tiet
   view2(title: string,content:string,day:string,author:string): void {
    this.route.navigate(['/']).then(() => {
      const index: any[] = [title,content,day,author];
      this.navigationExtras = { state: index };
      this.route.navigateByUrl('/bodychitiet', this.navigationExtras);
    });
  }
  
}
