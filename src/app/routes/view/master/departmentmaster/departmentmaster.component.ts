import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng';
import { defaults } from 'src/app/shared/service/settings';

@Component({
  selector: 'app-departmentmaster',
  templateUrl: './departmentmaster.component.html',
  styleUrls: ['./departmentmaster.component.scss']
})
export class DepartmentmasterComponent implements OnInit {
  title: string;
   
  departmentForm: FormGroup;
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
      
      this.departmentForm = this.fb.group({
        Code:new FormControl('', Validators.required),
        ShortOrder: new FormControl('', Validators.required),
        Department:new FormControl('', Validators.required),
        ShortName: new FormControl('', Validators.required),
         
      });
    }


public get f() {
        return this.departmentForm.controls;
      }
 
}
