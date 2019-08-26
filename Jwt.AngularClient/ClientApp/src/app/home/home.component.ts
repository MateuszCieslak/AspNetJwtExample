import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private token: any;

  constructor(private http: HttpClient) { }

  onInit() {
  }

  auth() {
    console.log('click');
    this.http.post('http://localhost:7000/api/users/authenticate', { UserName: 'test', Password: 'test' }).subscribe(x => { this.token = x.token; });
  }

  call() {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.token}`)
    }
    console.log('call');
    this.http.get('http://localhost:7000/api/users', header).subscribe();
  }
}
