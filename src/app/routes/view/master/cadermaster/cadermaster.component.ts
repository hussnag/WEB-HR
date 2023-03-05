import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadermaster',
  templateUrl: './cadermaster.component.html',
  styleUrls: ['./cadermaster.component.scss']
})
export class CadermasterComponent implements OnInit {

  title: string;
  CadremasterForm: FormGroup;
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
      
      this.CadremasterForm = this.fb.group({
        Code:new FormControl('', Validators.required),
        Cadre:new FormControl('', Validators.required),
      });
    }


public get f() {
        return this.CadremasterForm.controls;
      }
 
}
