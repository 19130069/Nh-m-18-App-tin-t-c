import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BodyTrangChuComponent } from '../body-trang-chu/body-trang-chu.component';

@Component({
  selector: 'app-body-chi-tiet',
  templateUrl: './body-chi-tiet.component.html',
  styleUrls: ['./body-chi-tiet.component.css']
})
export class BodyChiTietComponent implements OnInit {
  htmlStr: string;
  data:any[];
  title:string='';
  day:string='';
  constructor(private bodytrangchu:BodyTrangChuComponent,private route:Router) { 
    this.htmlStr='';
    const navigation = this.route.getCurrentNavigation();
    this.data = navigation?.extras.state as any[];
    
    if (typeof this.data !== 'undefined') {
        this.htmlStr =this.data[1];
        this.title =this.data[0];
        this.day =this.data[2];
    }
  }

  ngOnInit(): void {

  }
  
}
