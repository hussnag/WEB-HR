import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng';

@Component({
  selector: 'app-gratuityamountpolicy',
  templateUrl: './gratuityamountpolicy.component.html',
  styleUrls: ['./gratuityamountpolicy.component.scss']
})
export class GratuityamountpolicyComponent implements OnInit {

  title: string;
  GAPForm: FormGroup;
  subtitle: string;
  breadcumbmodel: MenuItem[];
  
  constructor(
    private activatedroute: ActivatedRoute,
    private fb: FormBuilder 
  )  {}

    ngOnInit(): void {
      this.activatedroute.data.subscribe(data => {
        this.title = data.title;
        this.subtitle = data.title;
      });
      
      this.GAPForm = this.fb.group({
        ID:new FormControl('', Validators.required),
        Policy :new FormControl('', Validators.required),
      });
    }


public get f() {
        return this.GAPForm.controls;
      }
 
}