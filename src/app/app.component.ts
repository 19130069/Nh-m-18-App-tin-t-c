import { Component,Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({providedIn: 'root'})//để gọi mọi nơi

export class AppComponent {
  title = 'appGDTD';
  constructor(private http: HttpClient){
  }
  
  getData(url: string): Observable<any>{
  return this.http.get(url);
  }
}
