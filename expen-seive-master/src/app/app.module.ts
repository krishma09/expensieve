import { Voucher } from './models/view-voucher';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { NgSelect2Module } from 'ng-select2';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { AddVoucherComponent } from './voucher/add-voucher/add-voucher.component';
import { AppSettings } from './services/app-settings.service';
import { InvoiceComponent } from './invoice/invoice.component';
import { BackEndCalls } from './services/backendcalls.service';
import { AddAccountingEntityComponent } from './account-entity/add-accounting-entity/add-accounting-entity.component';
import { AddProductTypeComponent } from './product/add-product-type/add-product-type.component';
import { ProductManagerComponent } from './product/product-manager/product-manager.component';
import { ViewProductsComponent } from './product/view-products/view-products.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './services/auth.loginguard';
import { ViewVouchersComponent } from './voucher/view-vouchers/view-vouchers.component';
import { VoucherManagerComponent } from './voucher/voucher-manager/voucher-manager.component';
import { InvoiceManagerComponent } from './invoice/invoice-manager/invoice-manager.component';
import { ViewInvoiceComponent } from './invoice/view-invoice/view-invoice.component';
import { PrintInvoiceComponent } from './invoice/print-invoice/print-invoice.component';
import { CustomerManagerComponent } from './customer/customer-manager/customer-manager.component';
import { ViewCustomersComponent } from './customer/view-customers/view-customers.component';
import { ViewSellersComponent } from './customer/view-sellers/view-sellers.component';
import { BankManagerComponent } from './Bank/bank-manager/bank-manager.component';
import { AddBankComponent } from './Bank/add-bank/add-bank.component';
import { ViewBankComponent } from './Bank/view-bank/view-bank.component';
import { AccountingEntityManagerComponent } from './account-entity/accounting-entity-manager/accounting-entity-manager.component';
import { ViewAccountingEntityComponent } from './account-entity/view-accounting-entity/view-accounting-entity.component';
import { BalancesheetComponent } from './balancesheet/balancesheet.component';
import { AccountingEntityManagerService } from './account-entity/view-accounting-entity/accounting-entity-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { GetcompanyProtypeService } from './product/add-product/getcompany-protype.service';
import { ProductserviceService } from './product/view-products/productservice.service';
import { GetaccountgrpService } from './account-entity/add-accounting-entity/getaccountgrp.service';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { AddprotypeService } from './product/add-product-type/addprotype.service';
import { EditAccountingEntityComponent } from './account-entity/edit-accounting-entity/edit-accounting-entity.component';
import { ViewCustomerServiceService } from './customer/view-customers/view-customer-service.service';
import { ViewSellerServiceService } from './customer/view-sellers/view-seller-service.service';
import { GetPincodeService } from './customer/add-customer/get-pincode.service';
import { BankServiceService } from './Bank/view-bank/bank-service.service';
import { AddSellerComponent } from './customer/add-seller/add-seller.component';
import { EditPhoneNoComponent } from './customer/edit-phone-no/edit-phone-no.component';
import { EditPhoneNoserviceService } from './customer/edit-phone-no/edit-phone-noservice.service';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { EditSellerComponent } from './customer/edit-seller/edit-seller.component'
import { GetPincodeService1 } from './Bank/add-bank/get-pincode.service';
import { InvoiceServiceService } from './invoice/view-invoice/invoice-service.service';
import { GetcompanyProductService } from './invoice/getcompany-product.service';
import { CommonModule } from '@angular/common';
import { VoucherserviceService } from './voucher/view-vouchers/voucherservice.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProductComponent,
    AddCustomerComponent,
    AddVoucherComponent,
    InvoiceComponent,
    AddAccountingEntityComponent,
    AddProductTypeComponent,
    ProductManagerComponent,
    ViewProductsComponent,
    LoginComponent,
    ViewVouchersComponent,
    VoucherManagerComponent,
    InvoiceManagerComponent,
    ViewInvoiceComponent,
    PrintInvoiceComponent,
    CustomerManagerComponent,
    ViewCustomersComponent,
    ViewSellersComponent,
    BankManagerComponent,
    AddBankComponent,
    ViewBankComponent,
    AccountingEntityManagerComponent,
    ViewAccountingEntityComponent,
    BalancesheetComponent,
    EditProductComponent,
    EditAccountingEntityComponent,
    AddSellerComponent,
    EditPhoneNoComponent,
    EditCustomerComponent,
    EditSellerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule,
    NgSelect2Module,
    DataTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    BackEndCalls,
    AppSettings,
    LoginGuard,
    AccountingEntityManagerService,
    ProductserviceService,
    GetaccountgrpService,
    GetcompanyProtypeService,
    AddprotypeService,
    ViewCustomerServiceService,
    ViewSellerServiceService,
    GetPincodeService,
    BankServiceService,
    EditPhoneNoserviceService,
    GetPincodeService1,
    InvoiceServiceService,
    GetcompanyProductService,
    VoucherserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
