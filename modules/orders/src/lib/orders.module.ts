import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ordersRoutes } from './lib.routes';
import { OrderListComponent } from './order-list/order-list.component';
import { UiInterfaceComponent } from 'modules/shared/ui-interface';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ordersRoutes), UiInterfaceComponent],
  declarations: [OrderListComponent],
})
export class OrdersModule { }
