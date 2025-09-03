import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyprofileComponent } from './reactiveforms/myprofile/myprofile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from './reactiveforms/pagination/pagination.component';
import { ProductdetailsComponent } from './reactiveforms/productdetails/productdetails.component';
import { AddprofileComponent } from './reactiveforms/addprofile/addprofile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { ChildsettingComponent } from './Dashboard/dashboard/setting/childsetting/childsetting.component';
import { SettingComponent } from './Dashboard/dashboard/setting/setting.component';
import { BredcrumComponent } from './Breadcrum/bredcrum/bredcrum.component';


@NgModule({
  declarations: [
    AppComponent,
    MyprofileComponent,
    PaginationComponent,
    ProductdetailsComponent,
    AddprofileComponent,
    DashboardComponent,
    SettingComponent,
    ChildsettingComponent,
    BredcrumComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
