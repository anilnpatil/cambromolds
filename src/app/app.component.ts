import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cambromolds';

  constructor(private http: HttpClient) {}
 

  openApplication(url: string): void {
    window.location.href = url; // Navigate to the specified URL
  }
}
