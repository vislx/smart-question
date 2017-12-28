import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticateService} from "../authenticate.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public adminPasswordForm: FormGroup;
  public invalidPassword = false;
  
  constructor(private fb: FormBuilder,
              private authService: AuthenticateService,
              private router: Router) {
    this.adminPasswordForm = fb.group({
      'password': ['', Validators.required]
    })
  }
  
  ngOnInit() {
  }
  
  onPassowrdKeyDown() {
    this.invalidPassword = false;
  }
  
  sendAdminPassword() {
    const result = this.authService.admin_login(this.adminPasswordForm.get('password').value);
    if (result.success) {
      this.router.navigate(['/admin/test/'], {queryParams: {'key': result.key}});
    } else {
      this.invalidPassword = true;
    }
  }
}
