import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  constructor(private http: HttpClient) {}
  jsonData: any;
  ngOnInit(): void {
    this.getJSON();
  }
  private getJSON() {
    this.http.get('./assets/link.json').subscribe(
      data => {
        this.jsonData = data;
        console.log('jaon data- ', data);
      });
    }
}
