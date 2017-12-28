import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-question',
  templateUrl: './test-question.component.html',
  styleUrls: ['./test-question.component.css']
})
export class TestQuestionComponent implements OnInit {
  
  user: string;
  key: string;
  sub = [];
  
  public answerForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.sub[0] = this.route.params.subscribe(params => {
      this.user = params['user'];
    });
    this.sub[1] = this.route.queryParams.subscribe(queryParams => {
      this.key = queryParams.key;
    });
    this.answerForm = fb.group({
      'user_answer': ['', Validators.required]
    })
  }

  ngOnInit() {
  
  }
  
  ngOnDestory() {
    this.sub[0].unsubscribe();
    this.sub[1].unsubscribe();
  }
  
  

}
