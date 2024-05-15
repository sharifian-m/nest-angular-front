import {Component, OnInit} from '@angular/core';
import {TestService} from "./service/test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements  OnInit{
  title = 'frontend';
  constructor(private  service:TestService) {
  }
  ngOnInit() {
    this.service.getHello().subscribe((x:any)=>this.title=x?.response)
  }
}
