import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TestQuestionService} from "../test-question.service";

@Component({
  selector: 'app-test-question',
  templateUrl: './test-question.component.html',
  styleUrls: ['./test-question.component.css']
})
export class TestQuestionComponent implements OnInit {
  
  
  public paragraphAnswerForm: FormGroup;
  public mcqAnswerForm: FormGroup;
  
  public current: any;
  private answerRecord: any;
  
  public characterLimit = 1000;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private tqs: TestQuestionService,
              private router: Router) {
    this.paragraphAnswerForm = fb.group({
      'answer': ['', [
        Validators.maxLength(this.characterLimit)
      ]]});
  
    this.mcqAnswerForm = fb.group({'answer': ['', Validators.required]})
  }

  ngOnInit() {
    this.tqs.retrieveTest();
    this.tqs.start();
    this.getCurrentQuestion();
  }
  
  getCurrentQuestion() {
    this.paragraphAnswerForm.reset();
    this.current = this.tqs.getCurrentQuestion();
    this.answerRecord = {
      longest: '',
      shortest: ' ',
      keypressed: 0
    };
    
    if (this.current.question.type === 'paragraph') {
      this.paragraphAnswerForm.setValue({'answer': this.current.question.paragraph_preset_answer});
    }
    
    console.log(this.current);
  }
  
  paragraphKeyDown(event) {
    let temp = this.answer.value;
    // record shortest
    if (!temp) {
      if (this.answer.dirty) {
      
      }
    } else if (this.answerRecord.shortest.length >= temp.length) {
      this.answerRecord.shortest = temp;
    }
  }
  
  paragraphKeyPressed(event) {
    let temp = this.answer.value;
    // record longest
    if (temp && this.answerRecord.longest.length < temp.length) {
      this.answerRecord.longest = temp;
    }
    // record number of times pressing keys
    this.answerRecord.keypressed ++;
  }
  
  paragraphSubmit() {
    this.answerRecord['final_answer'] = this.answer.value;
    this.answerRecord['dirty'] = this.answer.dirty;
    console.log('paragraphSubmit', this.answerRecord);
    
    this.tqs.answerQuestion(this.answerRecord);
    if (this.current.isLast) {
      this.tqs.submit();
      this.router.navigate(['/test-result']);
    } else {
      this.getCurrentQuestion();
    }
    
    console.log(this.answerRecord);
  }
  
  mcqSubmit() {
    console.log('mcqSubmit', this.mcqAnswerForm.get('answer').value);
  }
  
  get answer () {return this.paragraphAnswerForm.get('answer'); }
  
  
}
