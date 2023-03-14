import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehiclemaster',
  templateUrl: './vehiclemaster.component.html',
  styleUrls: ['./vehiclemaster.component.scss']
})
export class VehiclemasterComponent implements OnInit {

  
  title: string;
  vehiclemasterForm: FormGroup;
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
      
      this.vehiclemasterForm = this.fb.group({
        ID:new FormControl('', Validators.required),
        PlateNO:new FormControl('', Validators.required),
        Vehtype:new FormControl('', Validators.required),
        EngineNo:new FormControl('', Validators.required),
        Type:new FormControl('', Validators.required),
        ChasisNo:new FormControl('', Validators.required),
        AssignTo:new FormControl('', Validators.required),
        Location:new FormControl('', Validators.required),
        Company:new FormControl('', Validators.required),
      
      });
    }


public get f() {
        return this.vehiclemasterForm.controls;
      }
 
}
