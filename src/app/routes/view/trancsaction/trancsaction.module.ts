import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './transaction.routing.module';
import { LoanentryComponent } from './loanentry/loanentry.component';
import { PrimeModuleModule } from 'src/app/shared/module/prime-module/prime-module.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule, ListboxModule } from 'primeng';
import { MasterRoutingModule } from '../master/master-routing.module';
import { SaleRoutingModule } from '../sale/sale-routing.module';
import { HotTableModule } from '@handsontable/angular';



@NgModule({
  declarations: [LoanentryComponent],
  imports: [
    TransactionRoutingModule,
    CommonModule,
    SharedModule,
    PrimeModuleModule,
    ReactiveFormsModule,
    FormsModule,
    MasterRoutingModule,
    SaleRoutingModule,
    CommonModule,
    SharedModule,
    PrimeModuleModule,
    ReactiveFormsModule,
    FormsModule,
    ListboxModule,
    HotTableModule
  ]
})
export class TrancsactionModule { }
