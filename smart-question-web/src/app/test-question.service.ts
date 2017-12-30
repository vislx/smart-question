import { Injectable } from '@angular/core';
import { AuthenticateService } from './authenticate.service';

declare var moment: any;

@Injectable()
export class TestQuestionService {
  
  public questions = [];
  public answers = [];
  
  public n = 0;
  public i = 0;
  
  private start_time: any;
  private end_time: any;
  
  public status = 'initilized';

  constructor(private authService: AuthenticateService) {
  }
  
  public getCurrentQuestion() {
    return this.isOngoing() ? {
      n: this.n,
      i: this.i,
      question: this.questions[this.i],
      isLast: this.i === this.n - 1
    } : null;
  }
  
  public retrieveTest() {
    console.log('authen-service token:', this.authService.token);
  
    this.questions = [
      {
        'id': 'a89nfeefdew234',
        'test_id': '123',
        'body': 'How is the weather today?',
        'type': 'paragraph',
        'paragraph_preset_answer': 'Today is a nice day ',
      }, {
        'id': 'a89nfeefdew234',
        'test_id': '123',
        'body': 'Describe the city you lived in.',
        'type': 'paragraph',
        'paragraph_preset_answer': 'I\'m from Singapore where ',
      }, {
        'id': 'a89nfeefdew234',
        'test_id': '123',
        'body': 'How is the year of 2017?',
        'type': 'paragraph',
        'paragraph_preset_answer': null,
      }
    ];
    
    this.n = this.questions.length;
    this.i = 0;
    this.status = 'ready';
  }
  
  public answerQuestion(answer) {
    this.answers.push({
      i: this.i,
      answer: answer,
      time: moment()
    });
    this.i++;
  }
  
  public start() {
    this.status = 'ongoing';
    this.start_time = moment();
  }
  
  public submit() {
    this.status = 'finish';
    this.end_time = moment();
  }
  
  public getTestResult() {
    return this.isFinish() ?  {
      start: this.start_time,
      end: this.end_time,
      duration: this.end_time.diff(this.start_time, 'seconds'),
      questions: this.questions,
      answers: this.answers
    } : null;
  }
  
  public isReady() { return this.status === 'ready'; }
  public isOngoing() { return this.status === 'ongoing'; }
  public isFinish() { return this.status === 'finish'; }

}
