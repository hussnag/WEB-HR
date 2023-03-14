import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotTableRegisterer } from '@handsontable/angular';
import Handsontable from 'handsontable';

@Component({
  selector: 'app-loanentry',
  templateUrl: './loanentry.component.html',
  styleUrls: ['./loanentry.component.scss']
})
export class LoanentryComponent implements OnInit {

  title: string;
  loanentryForm: FormGroup;
  subtitle: string;
  constructor(
    private activatedroute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

 // private hotRegisterer = new HotTableRegisterer();
 // hotid = 'purchasevoucher_HotEntry';
 // purchasevoucher_entry: Handsontable.GridSettings;
  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => {
      this.title = data.title;
      this.subtitle = data.title;
    });

    this.loanentryForm = new FormGroup({
      LoanCode: new FormControl('', Validators.required),
      IssueDate: new FormControl('', Validators.required),
      LoanType: new FormControl('', Validators.required),
      Loanstartdate: new FormControl('', Validators.required),
      REFNO: new FormControl('', Validators.required),
      Loanamount: new FormControl('', Validators.required),
      NOOFINST: new FormControl('', Validators.required),
      INSTAMOUNT: new FormControl('', Validators.required),
    });
  }


  get f() {
    return this.loanentryForm.controls;
  }

}