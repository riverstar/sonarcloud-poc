import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@empty-nx-workspace/api-interfaces';

@Component({
  selector: 'empty-nx-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {
    console.log(2345678); // TEST
  }
}
