import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticateService} from "../authenticate.service";
import {TestQuestionService} from "../test-question.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public accessCodeForm: FormGroup;
  public invalidAccessCode = false;

  constructor(private fb: FormBuilder,
              private authService: AuthenticateService,
              private testQuestionService: TestQuestionService,
              private router: Router) {
    this.accessCodeForm = fb.group({
      'accessCode': ['', Validators.required]
    })
  }

  ngOnInit() {
  }
  
  typeAccessCode() {
    this.invalidAccessCode = false;
  }
  
  sendAccessCode() {
    const success = this.authService.tester_login(this.accessCodeForm.get('accessCode').value.toUpperCase());
    if (success) {
      this.testQuestionService.retrieveTest();
      this.router.navigate(['/test']);
    } else {
      this.invalidAccessCode = true;
    }
  }

}
