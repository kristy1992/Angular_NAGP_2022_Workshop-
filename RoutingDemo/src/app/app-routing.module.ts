import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstChildComponent } from './first-child/first-child.component';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductGuardService } from './product-guard.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductList2Component } from './product-list2/product-list2.component';
import { ProductResolver } from './product.resolver';
import { SecondChildComponent } from './second-child/second-child.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent, children:[
    { path: 'first-child', component: FirstChildComponent},
    { path: 'second-child', component: SecondChildComponent},
  ]},
  { path: 'second-component', component: SecondComponent },
  {path: 'products', component:ProductListComponent, canActivate : [ProductGuardService]},
  {path: 'products2', component:ProductList2Component, resolve:{
    products: ProductResolver
  }},
  { path: 'product/:id', component: ProductDetailComponent },
  {path:'', redirectTo:'/products', pathMatch:'full'}, // path redirects
  {path :'**', component:PageNotFoundComponent},//wildcard route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
