import { Component, OnInit } from '@angular/core';
import {TestQuestionService} from "../test-question.service";
import {Router} from "@angular/router";

declare var moment: any;

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css']
})
export class TestResultComponent implements OnInit {

  public testResult = {};
  
  constructor(private tqs: TestQuestionService,
              private router: Router) { }

  ngOnInit() {
    this.testResult = this.tqs.getTestResult();
    if (!this.testResult) {
      this.router.navigate(['/home']);
    }
    console.log(this.testResult);
  }

}
