import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
    constructor(private http: HttpClient) {}
    jsonData: any;
    ngOnInit(): void {
      this.getJSON();
    }
    private getJSON() {
      this.http.get('./assets/tutorial.json').subscribe(
        data => {
          this.jsonData = data;
          console.log('jaon data- ', data);
        });
      }
  }
