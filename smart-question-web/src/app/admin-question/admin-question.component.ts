import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-question',
  templateUrl: './admin-question.component.html',
  styleUrls: ['./admin-question.component.css']
})
export class AdminQuestionComponent implements OnInit {

  public questions = [];
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 50; i++) {
      this.questions.push({
        'id': 'abdewjlajf390u0',
        'question_name': 'Long-Question 1',
        'question_body': 'How is the weather today? Please answer in below box. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'preset_answer': [
          'Today is a nice day! I like the sunshine',
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
        ]
      });
    }
    
  }

}
