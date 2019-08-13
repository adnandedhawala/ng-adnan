import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{RouterModule,Routes} from '@angular/router';
import{HttpClientModule}from '@angular/common/http';

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

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'loginPage',component:LoginComponent},  
  {path:'cartPage',component:CartComponent},
  {path:'category-product/:myvar',component:FiltercategoryComponent}
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
    FiltercategoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
