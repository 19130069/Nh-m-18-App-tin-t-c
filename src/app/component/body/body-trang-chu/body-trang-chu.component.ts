import { formatDate } from '@angular/common';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-body-trang-chu',
  templateUrl: './body-trang-chu.component.html',
  styleUrls: ['./body-trang-chu.component.css']
})
@Injectable({providedIn: 'root'})//để gọi mọi nơi

export class BodyTrangChuComponent implements OnInit {

  private urlTrangChu ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Ftrang-chu';
  private urlsThoiSu ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fthoi-su';
  private urlsGiaoDuc ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fgiao-duc';
  private urlsTrongNguoi ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Ftrong-nguoi';
  private urlsBonPhuong ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fbon-phuong';
  private urlsVanHoa ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fvan-hoa';
  private urlsTinhHoa ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Ftinh-hoa';
  private urlsGDLC ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthudo.giaoducthoidai.vn%2Frss%2Fgiao-duc-liem-chinh';
 
  @Input() dataThoiSu: any[];
  @Input() dataTrangChu: any[];
  @Input() dataGiaoDuc: any[];
  @Input() dataTrongNguoi: any[];
  @Input() dataBonPhuong: any[];
  @Input() dataVanHoa: any[];
  @Input() dataTinhHoa: any[];
  @Input() dataGDLC: any[];
  today = new Date();
  jstoday = formatDate(this.today, 'yyyy-MM-dd hh:mm:ss aa', 'en-US', '+0700');
  stringJson: any;

  constructor(private news:AppComponent,private router:Router) { 

    this.dataThoiSu=[];
    this.dataTrangChu=[];
    this.dataGiaoDuc=[];
    this.dataTrongNguoi=[];
    this.dataBonPhuong=[];
    this.dataVanHoa=[];
    this.dataTinhHoa=[];
    this.dataGDLC=[];


    this.getDatas(this.urlTrangChu,this.dataTrangChu);
    this.getDatas(this.urlsThoiSu,this.dataThoiSu);
    this.getDatas(this.urlsGiaoDuc,this.dataGiaoDuc);
    this.getDatas(this.urlsTrongNguoi,this.dataTrongNguoi);
    this.getDatas(this.urlsBonPhuong,this.dataBonPhuong);
    this.getDatas(this.urlsVanHoa,this.dataVanHoa);
    this.getDatas(this.urlsTinhHoa,this.dataTinhHoa);
    this.getDatas(this.urlsGDLC,this.dataGDLC);


    console.log(this.dataThoiSu)
    console.log(this.dataTrangChu)

  }
  //lấy thời gian

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
  //lấy dữ liệu file json từ link rss

  getDatas(urls: string, datas: any[]) {
    this.news.getData(urls)
      .subscribe((value: any) => {
        for (let item of value['items']) {
            datas.push({ image: item['thumbnail'], title: item['title'],
                  time: this.getTime(item['pubDate']), link: item['link'],description:item['description'],
                content:item['content'],day:item['pubDate'] });
             }
      });
  }
   //set active menu
   setActive(title:string){
    this.router.navigate(['/bodybymenu/' + title])
   
  }
  ngOnInit(): void {
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
 
}
