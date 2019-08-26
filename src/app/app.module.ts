import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import{HttpClientModule}from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import{FormsModule} from '@angular/forms';
import{CookieService} from 'ngx-cookie-service';

import { AppComponent } from './app.component'; 
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeatureComponent } from './feature/feature.component';
import { TabsComponent } from './tabs/tabs.component';
import { RecommendedItemsComponent } from './recommended-items/recommended-items.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { FiltercategoryComponent } from './filtercategory/filtercategory.component';
import { PasswordComponent } from './password/password.component';

import {AfterloginGuard} from './afterlogin.guard';
import{BeforeloginGuard} from './beforelogin.guard';
import { LogoutComponent } from './logout/logout.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'loginPage',component:LoginComponent,canActivate:[AfterloginGuard]},  
  {path:'cartPage',component:CartComponent},
  {path:'category-product/:myvar',component:FiltercategoryComponent},
  {path:'password',component:PasswordComponent,canActivate:[BeforeloginGuard]},
  {path:'logoutPage',component:LogoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FeatureComponent,
    TabsComponent,
    RecommendedItemsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    FiltercategoryComponent,
    PasswordComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
