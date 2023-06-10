import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { SharingDataService } from 'src/app/sharing-data.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private sharingDataService : SharingDataService) {
    this.sharingDataService.data = this.isLoggedIn;
  }


  correctLogin: string = "maciek";
  correctPassword: string = "1234";
  userLogin: string = "";
  userPassword: string = "";
  public isLoggedIn: boolean = false;


  isDataCorrect(): void {
    if(this.userLogin == this.correctLogin && this.userPassword == this.correctPassword) {
      console.log("Pomyslnie zalogowano");
      this.isLoggedIn = true;
      console.log(this.isLoggedIn);
      this.sharingDataService.data = true;
      this.sharingDataService.nameData = this.userLogin;
      console.log(this.sharingDataService.data);
      }
    else console.log("Niepoprawne dane");
  }










}
