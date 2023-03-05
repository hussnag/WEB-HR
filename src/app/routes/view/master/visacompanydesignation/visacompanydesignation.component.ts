import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visacompanydesignation',
  templateUrl: './visacompanydesignation.component.html',
  styleUrls: ['./visacompanydesignation.component.scss']
})
export class VisacompanydesignationComponent implements OnInit {

  title: string;
  visaDesignationForm: FormGroup;
  subtitle: string;
  constructor(
    private activatedroute: ActivatedRoute,
    private fb: FormBuilder 
  )  {}

    ngOnInit(): void {
      this.activatedroute.data.subscribe(data => {
        this.title = data.title;
        this.subtitle = data.title;
      });
      
      this.visaDesignationForm = this.fb.group({
        visaDesignation:new FormControl('', Validators.required),
        
      });
    }


public get f() {
        return this.visaDesignationForm.controls;
      }
 
}
