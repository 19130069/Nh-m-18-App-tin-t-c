import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public keyword:any;
  
  constructor(private router: Router) {
    this.keyword='';
    
   }
   //set active menu
setActive(title:string){
  this.router.navigate(['/bodybymenu/' + title])
 
}
navigationExtras?: NavigationExtras;
view2(): void {
  this.router.navigate(['/']).then(() => {
    const index: any[] = [this.keyword];
    this.navigationExtras = { state: index };
    this.router.navigateByUrl('/search', this.navigationExtras);
  });
}

  ngOnInit(): void {
  
  }

}
