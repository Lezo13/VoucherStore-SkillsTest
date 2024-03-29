import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanShowConfirmationForm } from 'src/app/core/canshowconfirmationform';

import { OrderformComponent } from './orderform/orderform.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { OrderlistComponent } from './vieworders/orderlist.component';

const routes: Routes = [
  {
    path: 'home',
    data: { title: 'Home Page' },
    component: HomeComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'vieworders',
    component: OrderlistComponent
  },
  {
    path: 'order/orderform',
    component: OrderformComponent,
    canActivate: [CanShowConfirmationForm] // FOR PREVENTION OF LOAD OR ACCESS
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
