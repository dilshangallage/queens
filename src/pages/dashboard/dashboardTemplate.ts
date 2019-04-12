/**
 * Created by dilshan on 3/8/19.
 */
export const DASHBOARDTEMPLATE = `
<ion-header class="app-hdr">
  <ion-navbar>
    <img src="assets/imgs/app-logo.png" class="hdr-logo">
    <ion-buttons end>
      <button ion-button class="menu-ioc"><ion-icon name="menu"></ion-icon></button>
    </ion-buttons>
  </ion-navbar>
</ion-header>


<ion-content padding class="app-page-bg">

<ion-row class="search-fld">
    <input [(ngModel)]="payemntInvoice" class="flx-1" placeholder="Search Payments and Customers"> <button ion-button (click)="searchRef(payemntInvoice)"> <ion-icon name="search"></ion-icon> </button>
</ion-row>

  <ion-row class="app-card-1 db-card">
    <ion-col no-padding>
        <ion-row class="cd-uper-row">
          <ion-col col-6 class="sec-col" (click)="newsaloonJob()">
            <img class="sec-img" src="assets/imgs/salon%20invoice%20Icon.png">
            <div class="sec-hdr">Saloon Invoices</div>
            <div class="sec-vlue">{{salInvsCnt}}</div>
          </ion-col>

          <ion-col col-6 class="sec-col" (click)="newBridalJob()">
            <img class="sec-img" src="assets/imgs/Bridel%20information%20icon.png">
            <div class="sec-hdr">Bridal Invoices</div>
            <div class="sec-vlue">{{brdInvsCnt}}</div>
          </ion-col>
        </ion-row>

        <ion-row *ngIf="salIncome">
          <ion-col col-6 class="sub-sec">
            <div class="hdr">Daily Income</div>
            <div class="inc-valu">{{salIncome}}</div>
            <div class="date">{{crntDate}}</div>
          </ion-col>

          <ion-col col-6 class="sub-sec">
            <div class="hdr">Daily Income</div>
            <div class="inc-valu">{{brdlIncome}}</div>
            <div class="date">{{crntDate}}</div>
          </ion-col>
        </ion-row>
    </ion-col>
  </ion-row>

  <!-- <ion-row>
    <button (click)="newJob()" ion-button>New Job</button>
  </ion-row> -->

<!--   one button -->
  <ion-row class="app-button-row">
    <button (click)="bankReceiptView()" ion-button class="gren-btn app-button">Add Bank Reciept</button>
  </ion-row>
  <ion-row class="bnk-recp">
     <ion-col col-md-4>
     <div class="hdr flx-1"> Bank Receipt Amount</div>
     </ion-col>
     <ion-col col-md-8>
     <div class="hdr flx-1"> {{bank_receipt_amount}}{{' LKR'}}</div>
     </ion-col>
  </ion-row>

  <!-- tab button 2 -->
  <!-- <ion-row class="tab-btn-row">
      <button class="btn-lft active-btn-brwn" ion-button>Settle the Bill</button>
      <button class="btn-rgt active-btn-gren" ion-button>Pay Advance</button>
  </ion-row> -->

<!-- tab-button 1 -->
  <ion-row class="tab-btn-row">
      <button class="btn-lft" [(ngClass)]="saloonClz" (click)="saloonDailyPymntHstry()" ion-button>Saloon Payments</button>
      <button class="btn-rgt" [(ngClass)]="bridalClz" (click)="bridalDailyPymntHstry()" ion-button>Bridal Payments</button>
  </ion-row>

<ion-row class="tab-sec-hdr">
  <img src="assets/imgs/payment%20icon.png">
  <div class="hdr flx-1">Payment History</div>
</ion-row>

  <ion-grid *ngIf="salView" class="tab-sec-cnt">
    <ion-row *ngFor="let saloon of slnPymnt" class="one-payment-rec">
      <div class="flx-1" (click)="searchRef(saloon.invoiceNumber)">
        <div class="flx-layout pers-info">
          <div class="flx-1">{{saloon.customrtName}}</div>
          <div>LKR{{saloon.advance + saloon.balance}}</div>
        </div>
        <div class="flx-layout bil-info">
          <div>{{saloon.invoiceNumber}}</div>
          <div class="flx-1">{{saloon.treatment}}</div>
          <div>{{crntDate}}</div>
        </div>
      </div>
      <div><ion-icon name="checkmark-circle"></ion-icon></div>
      <!-- <ion-row>
        <ion-col>
          {{saloon?.name}}
        </ion-col>
        <ion-col>
          {{saloon?.balance}}
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          {{saloon?.invId}}
        </ion-col>
        <ion-col>
          {{saloon?.job}}
        </ion-col>
        <ion-col>
          {{saloon?.date}}
        </ion-col>
      </ion-row> -->
    </ion-row>

  </ion-grid>
  
<!--    <ion-grid *ngIf="brdView" class="tab-sec-cnt">
    <ion-card *ngFor="let saloon of brdPymnt" (click)="searchRef(saloon.invoiceNumber)">
      <ion-row>
        <ion-col>
          {{saloon?.customrtName}}
        </ion-col>
        <ion-col>
          {{saloon.advance + saloon.balance}}
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          {{saloon?.invoiceNumber}}
        </ion-col>
        <ion-col>
          {{saloon?.treatment}}
        </ion-col>
        <ion-col>
          {{crntDate}}
        </ion-col>
      </ion-row>
    </ion-card>
  </ion-grid> -->


  <ion-grid *ngIf="brdView" class="tab-sec-cnt">
    <ion-row *ngFor="let saloon of brdPymnt" class="one-payment-rec">
      <div class="flx-1" (click)="searchRef(saloon.invoiceNumber)">
        <div class="flx-layout pers-info">
          <div class="flx-1">{{saloon?.customrtName}}</div>
          <div>LKR{{saloon.advance + saloon.balance}}</div>
        </div>
        <div class="flx-layout bil-info">
          <div>{{saloon?.invoiceNumber}}</div>
          <div class="flx-1">{{saloon?.treatment}}</div>
          <div>{{crntDate}}</div>
        </div>
      </div>
      <div><ion-icon name="checkmark-circle"></ion-icon></div>
    </ion-row>

  </ion-grid>
</ion-content>
`;