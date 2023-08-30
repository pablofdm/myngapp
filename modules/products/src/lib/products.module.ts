import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { productsRoutes } from './lib.routes';
import { ProductListComponent } from './product-list/product-list.component';
import { UiInterfaceComponent } from 'modules/shared/ui-interface';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(productsRoutes), UiInterfaceComponent],
  declarations: [ProductListComponent],
})
export class ProductsModule { }
