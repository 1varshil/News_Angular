import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path:'admin',
    loadChildren: () => import('./admin/admin.module')
    .then(mod => mod.AdminModule)
  },
  {
    path:'payment',
    component:PaymentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
