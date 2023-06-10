import { Component, OnInit } from '@angular/core';
import { LoginPageComponent } from 'src/app/login-page/login-page.component';
import { SharingDataService } from 'src/app/sharing-data.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private sharingDataService : SharingDataService) {

  }
  isLoggedIn : any = this.sharingDataService.data;

  testMethod() {
    this.isLoggedIn = this.sharingDataService.data;
  }



}
