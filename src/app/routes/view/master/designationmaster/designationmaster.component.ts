import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-designationmaster',
  templateUrl: './designationmaster.component.html',
  styleUrls: ['./designationmaster.component.scss']
})
export class DesignationmasterComponent implements OnInit {
  title: string;
  designationForm: FormGroup;
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
      
      this.designationForm = this.fb.group({
        DesignationCode:new FormControl('', Validators.required),
        DesignationName: new FormControl('', Validators.required),
        ShortName:new FormControl('', Validators.required),
      });
    }


public get f() {
        return this.designationForm.controls;
      }
 
}
