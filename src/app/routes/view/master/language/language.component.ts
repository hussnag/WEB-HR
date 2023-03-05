import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  title: string;
  languageForm: FormGroup;
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
      
      this.languageForm = this.fb.group({
        Code:new FormControl('', Validators.required),
        Language :new FormControl('', Validators.required),
      });
    }


public get f() {
        return this.languageForm.controls;
      }
 
}