import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Twitter Search';
  searchquery = '';
  tweetsdata;

  constructor(private http: HttpClient) { }

  makecall() {
    var headers = new HttpHeaders();
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    this.http.post('http://localhost:4200/authorize', {headers: headers}).subscribe((res) => {
      console.log(res);
    })
  }
  
}
