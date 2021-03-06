/**
 * Created by dilshan on 3/8/19.
 */
export const LOGINTEMPLATE = `
<ion-content padding class="log_pg">

<ion-grid>
  
  <div class="log_logo">
      <img src="assets/imgs/quee-logo.png">
  </div>

    <div class="welcom-msg">
          Welcome
    </div>

    <ion-row class="un-pw-input">
      <ion-icon name="person"></ion-icon><input [(ngModel)]="nm" ngModel="unm" placeholder="Username">
    </ion-row>

    <ion-row class="un-pw-input">
      <ion-icon name="key"></ion-icon><input [(ngModel)]="pwd" ngModel="pwd" type="password" placeholder="Password">
    </ion-row>

    <ion-row class="fgt-pw-link">
      <div class="flx-1"></div><button ion-button>Forgot Password</button>
    </ion-row>

    <ion-row class="log-btn">
      <button ion-button (click)="loginClick()">Login</button>
    </ion-row>

    <ion-row class="reg-link">
      <div class="flx-1"></div>
      <div>NOT A MEMBER ?</div> <button ion-button>REGISTER</button>
      <div class="flx-1"></div>
    </ion-row>

  </ion-grid>

</ion-content>

<ion-footer class="rights-txt">
  <ion-row >
      <ion-col no-padding>
          Powerd by Smart Saloon Management System
          <div>Queens Salon - Galle 2019 @ All rights reserved</div>
      </ion-col>
    </ion-row>
</ion-footer>
`