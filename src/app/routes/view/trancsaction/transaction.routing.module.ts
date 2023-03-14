import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanentryComponent } from './loanentry/loanentry.component';


const routes: Routes = [
    {
        
        path: 'Loanentry',
        component: LoanentryComponent,
        data: { title: 'Loan Entry', titleI18n: 'Loan Entry' },
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TransactionRoutingModule { }
