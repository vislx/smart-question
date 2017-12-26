import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public accessCodeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.accessCodeForm = fb.group({
      'accessCode': ['', Validators.required]
    })
  }

  ngOnInit() {
  }
  
  sendAccessCode() {
    let accesscode = this.accessCodeForm.get('accessCode').value;
    accesscode = accesscode.toUpperCase();
    console.log('access code', accesscode);
  }

}
