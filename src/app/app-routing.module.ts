import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprofileComponent } from './reactiveforms/myprofile/myprofile.component';
import { PaginationComponent } from './reactiveforms/pagination/pagination.component';
import { ProductdetailsComponent } from './reactiveforms/productdetails/productdetails.component';
import { AddprofileComponent } from './reactiveforms/addprofile/addprofile.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { SettingComponent } from './Dashboard/dashboard/setting/setting.component';
import { ChildsettingComponent } from './Dashboard/dashboard/setting/childsetting/childsetting.component';

const routes: Routes = [
  { path:'myprofile', component:MyprofileComponent},
  {path:'pagination', component:PaginationComponent},
  {path:'profileDetails/:id/:jsk', component:ProductdetailsComponent, title:'ProfilePage' },
  {path:'addProfile', component:AddprofileComponent},

  {path:'dashboard', component:DashboardComponent,
        children:[{
          path:'setting', component:SettingComponent ,
          
          children:[{
            path:'childset', component:ChildsettingComponent
          }]
        }]

   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
